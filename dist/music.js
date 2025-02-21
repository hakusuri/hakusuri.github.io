const ap = new APlayer({
  container: document.getElementById('aplayer'),
  fixed: true,
  autoplay: false,
  audio: [
    {
      name: 'The Blue Star',
      artist: '今角夏織',
      url: 'https://music.163.com/#/song?id=1815975101',
      cover: 'http://p1.music.126.net/rYFp11FuLUniz2pLBSfHXA==/109951165674784257.jpg?param=130y130'
    },
    {
      name: '夜行列車～nothing to lose～',
      artist: 'Aimer',
      url: 'https://music.163.com/#/song?id=22643744',
      cover: 'http://p1.music.126.net/Fa934lcX20_m1u4t36rRSA==/109951166918580381.jpg?param=130y130'
    }
    
  ]
});

