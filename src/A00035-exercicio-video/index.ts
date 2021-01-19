interface VideoPlayerElements {
  videoPlayer: HTMLVideoElement;
  playButton: HTMLButtonElement;
  stopButton: HTMLButtonElement;
}

interface VideoPlayerProtocols {
  playToggle(): void;
  stop(): void;
  initEvents(): void;
}

export default class VideoPlayer implements VideoPlayerProtocols {
  private videoPlayer: HTMLVideoElement;
  private playButton: HTMLButtonElement;
  private stopButton: HTMLButtonElement;

  constructor(videoPlayerElements: VideoPlayerElements) {
    this.videoPlayer = videoPlayerElements.videoPlayer;
    this.playButton = videoPlayerElements.playButton;
    this.stopButton = videoPlayerElements.stopButton;
  }
  playToggle(): void {
    console.log('entrou no toggle');
    if (this.videoPlayer.paused) {
      this.videoPlayer.play();
      this.playButton.innerText = 'playing';
    } else {
      this.videoPlayer.pause();
    }
  }
  stop(): void {
    this.videoPlayer.paused;
    this.videoPlayer.currentTime = 0;
    this.playButton.innerText = 'play';
  }
  initEvents(): void {
    this.playButton.addEventListener('click', () => {
      this.playToggle();
    });
    this.stopButton.addEventListener('click', () => {
      this.stop();
    });
  }
}

const videoPlayer = new VideoPlayer({
  videoPlayer: document.querySelector('.video') as HTMLVideoElement,
  playButton: document.querySelector('.play') as HTMLButtonElement,
  stopButton: document.querySelector('.stop') as HTMLButtonElement,
});

videoPlayer.initEvents();
