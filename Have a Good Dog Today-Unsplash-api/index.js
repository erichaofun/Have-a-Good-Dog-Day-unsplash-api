let url = "https://api.unsplash.com/search/photos?page=1&query=dog&client_id=PsdWth6-tm5Mmjz5HB3QKX8aJwB7o9HKPB_TaTFU99E";

function makeRequest() {
  xhr = new XMLHttpRequest();
  xhr.onload = function() {
    let response = JSON.parse(this.response);
    console.log(response)
    }
  ;
  xhr.open("GET", url, true);

  xhr.send();
}
makeRequest();

https://api.unsplash.com/search/photos?page=1&query=dog&client_id=PsdWth6-tm5Mmjz5HB3QKX8aJwB7o9HKPB_TaTFU99E
