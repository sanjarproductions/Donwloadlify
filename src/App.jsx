import { useState } from "react";
import "./App.css"

const App = () => {
  const [data, setData] = useState({ downloadUrl: "" });
  const [url2, setUrl] = useState("");

  async function Render(e) {
    e.preventDefault();

    let formattedUrl = url2;
    if (!/^https?:\/\//i.test(url2)) {
      formattedUrl = `http://${url2}`;
    }

    const url = `https://youtube-mp310.p.rapidapi.com/download/mp3?url=${formattedUrl}`;

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '5354b358camsh9d9a18edea82a49p18103cjsn8eb38cdc5372',
        'X-RapidAPI-Host': 'youtube-mp310.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      if (result.downloadUrl) {
        setData({ downloadUrl: result.downloadUrl });
      } else {
        console.error('Download URL not found in response:', result);
      }
      console.log(result);

    } catch (error) {
      console.error('Error fetching the download URL:', error);
    }
  }

  return (
    //
    <>
      <div className="container">
        <div className="nav">
          <strong>Downloadlify(MP3)</strong>
          <div className="links__wrapper">
            <a href="https://buymeacoffee.com/sanjar" target="_black">Support</a>
            <a href="mailto:sanjarkama26@gmail.com">Feedback</a>
          </div>
        </div>

        <div className="wrapper-big">
          <p className="themessage">Pls wait a little bit , thats the first version of our product. I know it works a little slow but i pormise you, 
            As soon as we are gonna get our first donations/payed users the #1 Im gonna invest money in to is speed inshallah  
          </p>
          <form onSubmit={Render}>
            <input value={url2} onChange={(e) => setUrl(e.target.value)} placeholder="Enter Url" />
            <button className="clickBtn" type="submit">Click Me</button>
          </form>
          <div className="wrapper__downloader">
            {data.downloadUrl && (
              <div>
                <a href={data.downloadUrl} className="download__btn" download>Download</a>
                {/* <a onClick={()s => setTimeout(() => location.reload(), 2000)} href={data.downloadUrl} download>Download</a> */}
              </div>
            )}
          </div>
        </div>

      </div>
    </>
  );
}

export default App
