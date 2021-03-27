import React, { useEffect } from "react"
import Axios from "axios"
import { useParams } from "react-router-dom"

const courseDescription = {
 position: "absolute",
 top: "30%",
 zIndex: "2"
}
const styleRectangle = {
 padding: "1rem",
 borderRadius: "15px",
 height: "100%",
 maxHeight: "200px",
 width: "400px",
 background: "rgb(255, 255, 255, 0.8)",
 zIndex: "1",
 position: "absolute",
 top: "20%",
 left: "25%"
}

const styleObject = {
 position: 'relative',
 opacity: ".8",
 textAlign: "center",
 background: "black",
 color: "white",
 fontSize: "30px",
 maxHeight: "500px",
 height: "1000px",
 marginTop: "0",
 backgroundImage: `url("../assets/img/2-forest.jpg")`, /* The image used */
 backgroundColor: "#cccccc", /* Used if the image is unavailable */
 backgroundPosition: "center", /* Center the image */
 backgroundRepeat: "no-repeat", /* Do not repeat the image */
 backgroundSize: "cover", /* Resize the background image to cover the entire container */
}
const textAlign = {
 textAlign: 'left',
 color: "black"
}
const span = {
 fontSize: "20px",
 color: "black",
 display: "inline-block",
 float: "left",
 marginRight: "10px"
}
const star = {
 color: "#ffc107",
 display: "inline-block",
 float: "left",
}
function CourseDetailsPage() {
 const { maKhoaHoc } = useParams()
 useEffect(() => {
  const ourRequest = Axios.CancelToken.source()
  async function fetchPost() {
   try {
    console.log(maKhoaHoc);
    const response = await Axios.get(`/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`, { cancelToken: ourRequest.token })
    console.log(`This is data: `, response.data);
   }
   catch (e) {
    console.log("This must be some errors!");
   }
  }
  fetchPost()
  return () => {
   ourRequest.cancel()
  }
 }, [])

 return (
  <div>
   <div className="course__banner" style={styleObject}>
    <div style={styleRectangle}>
     <div className="course__descriptions" style={courseDescription}>
      <h3 style={textAlign}>LẬP TRÌNH FRONT - END</h3>
      <span align="left" style={span}>Đánh giá khóa học</span>
      <div style={star}>
       <i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i>
      </div><br />
     </div>
    </div>
   </div>

   <section className="container" style={{ position: "relative", height: "100%" }}>
    <h1>Giới thiệu khóa học</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit sapiente temporibus iste mollitia illum, et corporis consequuntur quae suscipit provident enim autem qui, ipsum quaerat sequi repudiandae ea! A atque possimus recusandae! Soluta magnam illum minus repudiandae. Repellat magni commodi quam doloremque asperiores, nam laboriosam deleniti atque, beatae cumque dicta nostrum ullam exercitationem repellendus, excepturi quo. Omnis dolorem, dicta deleniti consequatur vel quibusdam ad fugit modi accusamus ducimus aut, placeat aliquam reiciendis porro blanditiis. Odit quidem, culpa aspernatur cumque expedita itaque eveniet voluptatem, labore tempore officiis ducimus fuga, voluptate quod quaerat aliquid numquam. Unde, aliquid. Cum, autem repudiandae? Neque, expedita!
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum libero quisquam veniam esse aspernatur similique deleniti consectetur magnam perspiciatis modi! Amet nam vitae non veritatis doloremque nulla sint placeat debitis facilis deserunt, repudiandae magni officiis, cumque, fugit perferendis! Repellendus culpa iusto voluptatem nisi sequi placeat soluta perferendis magni rem maiores dignissimos accusantium explicabo dicta eveniet suscipit hic molestiae, commodi aliquid! Accusamus facilis excepturi possimus cumque nam. Quos incidunt tempore minus fuga enim dolor commodi laudantium quia ea odio voluptates facilis dolores voluptatum quis possimus praesentium vero, earum excepturi est minima molestias autem. Omnis tempore magnam sequi beatae deleniti reiciendis architecto, iusto at explicabo quas amet, consequuntur odit dicta! Illum adipisci dolor consequatur vel tenetur! Assumenda deserunt itaque esse tenetur soluta non. Vero velit dignissimos qui dolores enim veritatis architecto vitae quo et iste? Eos voluptatem, dolores et sint totam assumenda blanditiis perspiciatis vero, veritatis provident atque saepe quis. Molestias dignissimos autem id, voluptate non itaque necessitatibus commodi? Illo eos fugit et assumenda perspiciatis! Magnam recusandae id quaerat distinctio porro esse atque quos rerum at similique, fugit beatae facilis ex sequi quo quod, consequuntur velit exercitationem fuga ipsum? Ipsum provident aspernatur inventore eum, exercitationem at ab quos dolorem, unde repellendus iure vel atque doloribus! Ad aliquam distinctio sit harum officiis, autem minus asperiores sed facere. Nisi dolore dignissimos iste voluptatum incidunt. Temporibus laudantium optio voluptatibus unde neque amet eius ut voluptate id eligendi accusantium eaque commodi animi sint nihil quis, provident voluptates vel fuga. Ea, aliquid hic eius iste sit dicta est et aut amet voluptas quidem praesentium voluptate, nostrum quo autem cumque quis sapiente nihil nam, sint alias odio. Doloremque et dolor facere adipisci, impedit harum a at dolorum debitis ipsam? Odit iure dicta accusamus enim eveniet. Quae, quo alias commodi nesciunt modi consectetur illo hic inventore ipsum ipsam atque ullam odio, aspernatur cumque perferendis a placeat nostrum architecto accusantium. Reprehenderit neque eligendi cumque debitis sint expedita harum nihil excepturi. Aspernatur, veritatis, alias ad ducimus inventore harum adipisci repellendus ut sit atque placeat ipsum cum exercitationem aperiam vero repudiandae? Voluptatum iure sit, veniam consectetur maxime quis dolorum eum. Iusto, sit nostrum sapiente assumenda excepturi omnis perferendis quaerat, natus quis aut tenetur commodi! Recusandae quos molestias iste, deserunt commodi quas quae nesciunt aut repellat blanditiis numquam officiis laborum deleniti minima nobis a. Eos sit qui totam mollitia minus sunt, repellat nobis aspernatur similique impedit consequatur vel ipsum nostrum sint dignissimos aliquid quod illum quis a atque ipsa eius amet. Possimus laboriosam inventore exercitationem autem corrupti debitis molestias saepe cum dolorem modi dolorum quisquam ex vel adipisci eius, accusamus libero quae ad sapiente neque reiciendis facilis error, blanditiis doloribus? Incidunt quibusdam quos labore odit modi rerum tempore asperiores ipsum, autem quae, cumque iusto ad illo quod aut aliquid, distinctio ipsa iure vero est illum nesciunt ut? Eveniet quae id porro velit ab labore? Nostrum ullam culpa accusamus soluta optio asperiores magnam veniam molestias tempore quaerat corrupti, consequuntur magni rerum amet dolorem necessitatibus sapiente ad deleniti nesciunt repudiandae distinctio voluptatum! Reiciendis expedita soluta sequi, laboriosam aut ea eaque similique repellendus distinctio exercitationem illum praesentium tenetur deserunt corrupti modi nihil delectus quas non asperiores eligendi nesciunt autem quisquam. Praesentium aperiam recusandae atque eaque, minus saepe autem, voluptate ab dolore consequatur cum odit ipsa, qui quasi sint necessitatibus sunt tempora? Illo unde fugiat repellendus asperiores consequuntur quia tenetur eos, dolorum consequatur possimus magni libero mollitia maiores eius aliquid aliquam, rerum sunt nostrum! Libero, minus quisquam? Amet eveniet fuga molestiae esse qui debitis illum quod, impedit iusto exercitationem veritatis voluptatum adipisci corrupti doloremque voluptatem excepturi minus totam odio consequatur sunt aliquam veniam inventore nobis. Architecto repellendus eum non maxime unde fugit sit mollitia exercitationem porro sequi. Magnam praesentium illum eius voluptas vitae? Omnis quisquam deserunt animi tempore quia, odio doloribus libero hic, incidunt fugiat, ipsum enim sunt. Tenetur in ducimus explicabo, nemo recusandae aliquam tempore deleniti? Dolore quia odit distinctio blanditiis vitae, tempora molestias nam nihil a, natus totam fugiat id obcaecati delectus dignissimos sunt repudiandae. Amet vero aliquam excepturi dolore libero aspernatur beatae tempore vel eius quibusdam ratione rerum architecto, repellat dolor deleniti ab est tempora deserunt doloribus cumque! Sit eligendi culpa eos cupiditate deserunt laborum aliquam quae nulla neque tenetur, velit numquam aspernatur repudiandae odio laboriosam explicabo sequi quo. Iste minima optio debitis libero ratione omnis quos, impedit assumenda esse animi quo fugiat beatae quod veniam eligendi sit cumque, modi aspernatur sapiente corrupti vel odit aliquam? Molestiae odit cumque, doloribus ad sequi corrupti temporibus neque quidem amet? Sapiente quae quas neque vero nihil velit consequatur id consequuntur temporibus ea, natus quo, libero deserunt fugit eligendi quia? Facilis distinctio consequatur id tempora harum odio accusamus voluptates optio repellendus a dolorem repellat similique qui consectetur atque perferendis illo voluptate, explicabo aspernatur hic nesciunt aliquam natus quo! Aliquam, laborum saepe, ipsam expedita, pariatur dignissimos culpa nostrum sed iure ducimus natus sequi eveniet molestiae velit modi nulla maxime vero voluptatibus. Quidem, eos consectetur veniam at eius perferendis culpa hic est minus, accusantium quas aspernatur. Corrupti numquam deserunt velit architecto amet nobis laboriosam molestiae illo fugit ipsum. Quia, cumque. Minima, odit corrupti! Nesciunt sit harum dignissimos. Alias ducimus libero nemo minima fuga deserunt neque nostrum omnis, ratione quas cumque nihil totam quam modi voluptatem incidunt iusto dicta excepturi doloremque dolorum? Commodi fugit animi officiis numquam, ducimus doloribus eligendi. Odit veniam doloribus, possimus quae maxime libero totam tenetur ullam vero soluta blanditiis ipsam culpa exercitationem excepturi quo tempora deserunt impedit distinctio harum. Aliquam commodi ea ab recusandae? Dignissimos dolorem reiciendis voluptate quae esse! Fuga a libero officiis qui magni odio voluptatum molestias. Ipsam quaerat, laboriosam doloribus similique mollitia architecto? Et, iure animi. In cum inventore eveniet? Fugiat non impedit nam suscipit at ipsa enim autem cumque facilis! Consequatur ratione inventore quibusdam explicabo quas dolor! Fuga, nesciunt placeat? Quidem voluptatem magni nam libero earum reprehenderit tenetur accusamus facilis cum vel neque repellat voluptatum modi at dolor, sapiente excepturi dolorum iure ipsa quod adipisci! Itaque sit porro, assumenda soluta quos accusantium, nostrum corporis tempora quam, ipsa perspiciatis rerum maiores nesciunt sint tenetur.
   </p>
   </section>

  </div>
 )
}

export default CourseDetailsPage