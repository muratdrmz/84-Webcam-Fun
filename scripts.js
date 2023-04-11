const video = document.querySelector(".player");
const canvas = document.querySelector(".photo");
const ctx = canvas.getContext("2d");
const strip = document.querySelector(".strip");
const snap = document.querySelector(".snap");

function getVideo(){
 navigator.mediaDevices.getUserMedia({video:true, audio:false})
 .then(localMediaStream=>{  
  // video.src=window.URL.createObjectURL(localMediaStream);
  video.srcObject = localMediaStream;
  video.play();
 })
 .catch(err=>{
  console.error(err, "a problem accured");
  alert('upps')
 })
}

function paintToCanvas(){
 const width=video.videoWidth;
 const height=video.videoHeight;
 console.log(width,height);
 canvas.width=width;
 canvas.height=height;

 setInterval(() => {
  ctx.drawImage(video, 0, 0, width, height)
  
 }, 16);
}



getVideo();