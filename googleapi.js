function initMap(){

    var school = {lat: 10.845625,lng: 106.794315};
    var home = {lat:10.843512,lng: 106.795221};
    var map = new google.maps.Map(document.getElementById('map'),   {
        zoom:8,
        center: home,
    });

    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);

    // Image 
    const imageSchool = {
        url:"school.png",
        size: new google.maps.Size(90,90), 
        scaledSize: new google.maps.Size(50, 50)
    };
    const imageHome = {
        url:"home.png",
        size: new google.maps.Size(90,90), 
        scaledSize: new google.maps.Size(50, 50)
    };
    
    // Marker
    const markerSchool = new google.maps.Marker({
        position:school,
        title:"Trường Đại Học Giao Thông Vận Tải Phân Hiệu Tại TPHCM",
        map:map,
        icon:imageSchool,
    });

    const markerHome = new google.maps.Marker({
        position:home,
        map:map,
        icon:imageHome,
        title:"KTX Đại Học Giao Thông Vận Tải Phân Hiệu Tại TPHCM",
    });
    var infowindowSchool = new google.maps.InfoWindow({
        content: '<h1>Trường Đại Học Giao Thông Vận Tải Phân Hiệu Tại TPHCM</h1>' + '<br> Address: 450 Lê Văn Việt, Phường Tăng Nhơn Phú A ,Quận 9, TPHCM' + '<br> Email: banbientap@utc2.edu.vn',
    });
    
    var infowindowHome = new google.maps.InfoWindow({
        content: '<h1>About me</h1>' +'<br>Họ và Tên: Trần Đình Thảo' +'<br>Tuổi: 21' + '<br>MSV: 5951071099' + '<br>Ngày Sinh: 14/03/2000' + '<br>Quê quán: Hà Tĩnh' + '<br>Email: trandinhthao2000@gmail.com' + '<br>Địa Chỉ: KTX Đại Học Giao Thông Vận Tải Phân Hiệu Thành Phố Hồ Chí Minh'
    });

    markerSchool.addListener('click', () =>{
        infowindowSchool.open(map,markerSchool);
    });
    
    markerHome.addListener('click',() =>{
        infowindowHome.open(map,markerHome);
    });

    
    directionsService.route(
        {
            origin: home,
    
            destination: school,
    
            travelMode: google.maps.TravelMode.WALKING,
        },
        (response, status) => {
            if (status === "OK") {
                directionsRenderer.setDirections(response);
            }
            else {
                window.alert("Directions request failed duo to " + status);
            }
        }
    );
}