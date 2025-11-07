import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sound-meter',
  templateUrl: './sound-meter.component.html',
  styleUrls: ['./sound-meter.component.css']
})
export class SoundMeterComponent implements OnInit, OnDestroy {
  @ViewChild('bar') bar!: ElementRef<HTMLDivElement>;
  level = 0;
  private audioCtx?: AudioContext;
  private analyser?: AnalyserNode;
  private dataArray?: Uint8Array;
  private stream?: MediaStream;
  private sampleInterval?: any;
  private averageInterval?: any;
  private samples: number[] = [];

  async ngOnInit() {
    try {
      this.stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      this.audioCtx = new AudioContext();
      const source = this.audioCtx.createMediaStreamSource(this.stream);
      this.analyser = this.audioCtx.createAnalyser();
      this.analyser.fftSize = 256;
      this.dataArray = new Uint8Array(this.analyser.frequencyBinCount);
      source.connect(this.analyser);

      this.sampleInterval = setInterval(() => this.collectSample(), 100);
      this.averageInterval = setInterval(() => this.updateAverage(), 1000);
    } catch (err) {
      console.error('Error al acceder al micrófono:', err);
    }
  }

  private collectSample() {
    if (!this.analyser || !this.dataArray) return;
    this.analyser.getByteTimeDomainData(this.dataArray);
    let sum = 0;
    for (let i = 0; i < this.dataArray.length; i++) {
      const val = (this.dataArray[i] - 128) / 128;
      sum += val * val;
    }
    const rms = Math.sqrt(sum / this.dataArray.length);
    this.samples.push(Math.min(100, parseFloat((rms * 1000).toFixed(1))));
  }

  private updateAverage() {
    if (this.samples.length === 0) return;
    const avg = this.samples.reduce((a, b) => a + b, 0) / this.samples.length;
    this.samples = [];
    this.level = parseFloat(avg.toFixed(1));
    const barEl = this.bar?.nativeElement;
    if (barEl) {
      barEl.style.width = `${this.level}%`;
      barEl.style.backgroundColor =
        this.level > 70 ? '#ef4444' : this.level > 40 ? '#facc15' : '#22c55e';
    }
  }

  ngOnDestroy() {
    clearInterval(this.sampleInterval);
    clearInterval(this.averageInterval);
    this.audioCtx?.close();
    this.stream?.getTracks().forEach(t => t.stop());
  }
}