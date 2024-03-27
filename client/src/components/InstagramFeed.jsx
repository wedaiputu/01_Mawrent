export default function InstagramFeed(){
    return(
        <div className="p-2 w-11/12 md:w-full mx-auto" data-feedid="sbi_mawrents#6" data-res="auto" data-cols="3" data-num="6" data-shortcode-atts={{}} data-sbi-flags="favorLocal" data-sbi-index="1">
    <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-10">
        <a href="https://www.instagram.com/mawrents/" target="_blank" rel="noopener nofollow" title="@mawrents" className="sbi_header_link block">
            <div className="p-4">
                <div className="text-xl font-bold mb-2">mawrents</div>
                <p className="text-gray-600">Yay... This is our Instagram!</p>
            </div>
            <div className="p-4 bg-cover bg-center" style={{backgroundImage: 'url(https://mawrent.com/wp-content/uploads/sb-instagram-feed-images/mawrents.jpg)'}}>
                <img src="https://mawrent.com/wp-content/uploads/sb-instagram-feed-images/mawrents.jpg" alt="Sewa Mobil Bali 🇲🇨 Car Rental Bali - Mawrent" className="w-12 h-12 rounded-full mx-auto"/>
            </div>
        </a>
    </div>
    <div className="grid gap-4 md:grid-cols-3">
        <div className="sbi_item sbi_type_video" id="sbi_17981438225447856" data-date="1704039711">
            <a href="https://www.instagram.com/reel/C1hhoUmR8o6/" target="_blank" rel="noopener nofollow" className="sbi_photo_wrap bg-cover bg-center relative" style={{backgroundImage: 'url(https://mawrent.com/wp-content/uploads/sb-instagram-feed-images/414674960_379308804599538_3097559516170797237_nfull.jpg)'}}>
                <span className="sr-only">Happy new year 2024 🎇 Thank’s god and also al</span>
                <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="text-white w-12 h-12 fill-current" aria-label="Play" viewBox="0 0 448 512">
                        <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"/>
                    </svg>
                </div>
            </a>
        </div>
        {/* Add other items similarly */}
    </div>
</div>

    )
}