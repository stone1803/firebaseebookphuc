// const firebaseConfig = {
//     apiKey: "AIzaSyANU92M9hFovL1InevE0S5xazPAaoYZJ4E",
//     authDomain: "chiasekhoahoc.firebaseapp.com",
//     databaseURL: "https://chiasekhoahoc.firebaseio.com",
//     projectId: "chiasekhoahoc",
//     storageBucket: "chiasekhoahoc.appspot.com",
//     messagingSenderId: "71566019198",
//     appId: "1:71566019198:web:80021cafcd68f12c86e62f",
//     measurementId: "G-XPH1NZ002W"
// };

// firebase.initializeApp(firebaseConfig);
// var databaseRef = firebase.database().ref('khoahoc/');
// var storage = firebase.storage();
// var storageRef = storage.ref();
// config


// const renderHTML = () => {

//     const content = `
   
    
//     `
   
    
//     document.getElementById("root").innerHTML = content;

// };//render html


// // config


document.getElementById("themMoi").addEventListener("click", () => {
    console.log("wellcome PhucMap.Com")
    let file = document.getElementById("upload").files[0];
    console.log(file)
    var uploadTask = storageRef.child('tailieus/' + file.name).put(file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, function (snapshot) {
        var progress = snapshot.bytesTransferred / snapshot.totalBytes * 100;
        progressBar.value = progress;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
                console.log('Upload is paused');
                break;
            case firebase.storage.TaskState.RUNNING: // or 'running'
                console.log('Upload is running');
                break;
        }
    }, function (error) {
        switch (error.code) {
            case 'storage/unauthorized':
                // User doesn't have permission to access the object
                break;

            case 'storage/canceled':
                // User canceled the upload
                break;

            case 'storage/unknown':
                // Unknown error occurred, inspect error.serverResponse
                break;
        }

    }, function () {
        uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
            console.log('File available at', downloadURL);
            var tenKhoaHoc = document.getElementById('tenSach').value;
            var noiDungKhoaHoc = document.getElementById('noiDungSach').value;
            var uid = firebase.database().ref().child('khoahoc').push().key;

            var data = {
                user_id: uid,
                khoahoc: tenKhoaHoc,
                noidung: noiDungKhoaHoc,
                link: downloadURL

            }

            var updates = {};
            updates['/khoahoc/' + uid] = data;
            firebase.database().ref().update(updates);

            reload_page();


        })
    }

    );

    // uploadfile

}); // them moi 
// const renderTable = () => {
    
//     }
// // aler

  function reload_page(){
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
        onOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'BẠN ĐÃ THÊM MỚI THÀNH CÔNG'
      })


}
