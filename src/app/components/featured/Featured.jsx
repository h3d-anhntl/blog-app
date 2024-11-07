import React from 'react'
import styles from "./featured.module.css"
import Image from 'next/image'

export const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Anthea dev here!</b> Discover my stories and creative
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/nodel1.jpg" alt='' fill className={styles.image}/>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Tôi điều hành một thành phố ẩm thực</h1>
          <p className={styles.postDesc}>
          Giang Nhất Ẩm mắc bệnh ung thư dạ dày mà qua đời ở tuổi trẻ, nhưng lại bất ngờ nhận được một hệ thống kinh doanh ẩm thực. Để có thể sống lại và lấy lại những gì đã mất của sư phụ, cô đã chọn liên kết với hệ thống và đến một thế giới hậu tận thế để mở một nhà hàng. Nhưng liệu có khách hàng nào đến một cửa hàng ở vùng hoang vu như vậy không?Giang Nhất Ẩm nói: "Không sợ!"

Người dân trong thời kỳ hậu tận thế phát hiện ra rằng, ở khu vực nguy hiểm cấp C, đột nhiên xuất hiện một cửa hàng ẩm thực kỳ lạ. Không chỉ bán những món ăn trước khi xảy ra tận thế, mà những món ăn này còn có thể chữa lành vết thương, giải độc và tăng cường các chỉ số khác nhau! Khi đi nhiệm vụ bị thương? Lấy một chiếc bánh kếp cắn một miếng. Trận chiến ác liệt khiến năng lượng bị tiêu hao hết? Lấy một chai nước uống. Sắp đối mặt với kẻ thù quá mạnh? Ăn một loạt các món ăn tăng cường chỉ số.

Giang Nhất Ẩm nhờ nhà hàng kiếm được rất nhiều tiền, mua thuốc hồi sinh và quay trở lại thế giới của mình. Những kẻ đã hại cô, những kẻ oan uổng cô, đều phải trả giá. Nhưng điều không ngờ tới là, có người từ thế giới hậu tận thế đã theo cô đến.Cố Hoài Đình nói: "Em yêu, ăn xong rồi đi thôi, anh sẽ trừng phạt em như thế nào đây?"
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  )
}
