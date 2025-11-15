import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-soundmeter',
  templateUrl: './soundmeter.html',
  standalone: true
})
export class Soundmeter implements AfterViewInit {
  @ViewChild('bar') bar!: ElementRef<HTMLDivElement>;

  ngAfterViewInit() {
    (async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const audioCtx = new AudioContext();
        const source = audioCtx.createMediaStreamSource(stream);
        const analyser = audioCtx.createAnalyser();
        analyser.fftSize = 256;

        const dataArray = new Uint8Array(analyser.frequencyBinCount);
        source.connect(analyser);

        let samples: number[] = [];

        function collectSample() {
          analyser.getByteTimeDomainData(dataArray);
          let sum = 0;
          for (let i = 0; i < dataArray.length; i++) {
            const val = (dataArray[i] - 128) / 128;
            sum += val * val;
          }
          const rms = Math.sqrt(sum / dataArray.length);
          const db = 20 * Math.log10(rms || 1e-8);
          samples.push(Math.max(-100, Math.min(0, db)));
        }

        const barEl = this.bar.nativeElement;
        const levelEl = document.getElementById('level');

        function updateAverage() {
          if (samples.length === 0) return;
          const avg = samples.reduce((a, b) => a + b, 0) / samples.length;
          samples = [];
          const percent = Math.min(100, Math.max(0, 100 + avg));
          barEl.style.width = percent + '%';
          barEl.style.backgroundColor =
            percent > 70 ? '#ef4444' : percent > 40 ? '#facc15' : '#22c55e';
          if (levelEl) levelEl.textContent = avg.toFixed(1);
        }

        function loop() {
          collectSample();
          updateAverage();
          requestAnimationFrame(loop);
        }

        loop();
      } catch (err) {
        console.error('Error al acceder al micrófono:', err);
      }
    })();
  }
}
