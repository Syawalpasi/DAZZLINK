import Hero from "./Hero";
import Cardjurusan from "./Cardjurusan";
import jurusan1 from "./../asset/hero3.jpg"
import jurusan2 from "./../asset/hero2.jpg"
import jurusan3 from "./../asset/anaksma.jpg"
import Cardkegiatan from "./Cardkegiatan";
import Footer from "./Footer";
const Maincontent =  ()=>{
 return(
    <div>
    <Hero/>

    <div className="container">
        <div className="row" >
            <div className="col-12 text-center my-5">
                <h1>Jurusan Sekolah</h1>
            </div>

            <div className="col-lg-4 col-12">
                <Cardjurusan image={jurusan1} jurusan="Teknik Komputer" deskripsi="Ini adalah jurusan kompyer yang didalamnya memuat pembelajaran tentang komputer dan juga servis baik hardware maupun software"/>
            </div>

            <div className="col-lg-4 col-12">
                <Cardjurusan image={jurusan1} jurusan="Teknik Otomotif" deskripsi="Ini adalah teknik otomotif yang didalamnya memuat tentang pembelajaran tentang servis dan juga pengenalan part motor"/>
            </div>
            
            <div className="col-lg-4 col-12">
                <Cardjurusan image={jurusan3} jurusan="Teknik Mesin" deskripsi="Ini adalah teknik permesinan yang bermuat tentang bagaimana mengopeasikan mesin bubut dan masih banyak lagi"/>
            </div>
        </div>

        <div className="row">
            <div className="col-12 text-center my-5">
                <h1>Kegiatan</h1>
            </div>
            <div className="col-12 my-4" >
                <Cardkegiatan image={jurusan1}  deskripsi="halo ini saya iksan dan saya kaan membuat peradaban yang cermelang" />
            </div>
            <div className="col-12 my-4">
                <Cardkegiatan image={jurusan2}  deskripsi="halo ini saya iksan dan saya kaan membuat peradaban yang cermelang" />
            </div>
            <div className="col-12 my-4">
                <Cardkegiatan image={jurusan1}  deskripsi="halo ini saya iksan dan saya kaan membuat peradaban yang cermelang" />
            </div>

        </div>
        
        <div className="row">
            <div className="col-12 ">
                <Footer/>
            </div>
        </div>
    </div>
    </div>
 )
}
export default Maincontent;