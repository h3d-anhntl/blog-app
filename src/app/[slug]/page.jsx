import React from 'react'
import styles from './singlePage.module.css'
import Image from 'next/image'
import { Menu } from '../components/menu/Menu'
import { Comments } from '../components/comments/Comments'

const SinglePage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Chương 37: Ngọn nguồn sự việc</h1>
                <div className={styles.user}>
                    <div className={styles.userImageContainer}>
                        <Image src='/p1.jpg' alt='' fill className={styles.avatar} />
                    </div>
                    <div className={styles.userTextContainer}>
                        <span className={styles.username}>John Doe</span>
                        <span className={styles.date}>01.01.2024</span>
                    </div>
                </div>
            </div>
            <div className={styles.imageContainer}>
                <Image src="/p1.jpg" alt='' fill className={styles.image}/>
            </div>
        </div>
        <div className={styles.content}>
            <div className={styles.post}>
                <div className={styles.description}>
                    <p>Trong khu rừng tối tăm vang lên tiếng sột soạt, Giang Nhất Ẩm ngẩng đầu nhìn lên, bắt gặp ánh mắt của đứa trẻ đang thò đầu ra.<br/><br/>"Cậu đến rồi à." Cô vui vẻ vẫy tay, "Hôm nay chúng ta ngồi bên bàn ăn cơm được không?"<br/><br/>Đứa trẻ nhìn bàn ghế, nhưng không động đậy.<br/><br/>Nghĩ rằng cậu không biết cách ngồi xuống, cô đứng lên làm mẫu: "Cứ ngồi như thế này là được rồi."<br/><br/>Đứa trẻ vẫn không động đậy, chỉ có phần thân trên thò ra thêm chút từ sau gốc cây, đôi mắt đầy khao khát nhìn đĩa há cảo hấp to trước mặt.<br/><br/>Xem ra cậu không muốn ngồi xuống, cô cũng không ép buộc, đẩy một phần há cảo đến chỗ cậu có thể với tới, rồi tự mình cầm đũa lên gắp một chiếc há cảo.<br/><br/>"Có thể ăn trực tiếp, hoặc chấm rồi ăn." Cô làm mẫu cho cậu bé xem, chấm ngập trong dầu ớt và giấm, rồi nhét nguyên chiếc há cảo vào miệng, má cô lập tức phồng lên.<br/><br/>Nhân thịt lợn tươi kết hợp với cải thảo thái nhỏ, hương thơm của thịt và độ giòn ngọt của rau hòa quyện với nhau, như những quả bóng thịt nổ tung trong miệng, mang lại cảm giác vô cùng thỏa mãn.<br/><br/>Nuốt xong một chiếc há cảo, cô đổi sang dùng thìa, vừa ăn há cảo nước vừa uống canh, tuy kết cấu khác nhau nhưng đều ngon như nhau.<br/><br/>Cậu bé nhìn cô một lúc, rồi cũng vươn tay cầm thìa lên.<br/><br/>Ban đầu cậu tò mò quan sát chiếc há cảo béo múp, sau đó cố nhét nguyên một chiếc vào miệng như cô.<br/><br/>Nhưng cậu vẫn chỉ là một đứa trẻ, miệng còn nhỏ, không thể chứa được cả chiếc há cảo to như vậy, đành phải cắn làm đôi.<br/><br/>Kết quả là phần nhân còn lại rơi ra, rơi vào bát canh. Cậu hoảng hốt, vội vàng dùng thìa hớt lấy nhân, nhưng do cử động quá mạnh, phần nhân há cảo còn lại bị quấy nát, biến thành bát canh thịt băm.<br/><br/>Thực ra nhân há cảo vẫn còn ở đó, nhưng có vẻ như cậu không hiểu được điều đó, trông vô cùng buồn bã.<br/><br/>Cô thấy rất buồn cười, nhưng nhìn thấy vẻ mặt như sắp khóc của cậu, cô lập tức kìm nén cười và an ủi: "Đừng buồn, đừng buồn, nhân vẫn còn, lát nữa uống canh là coi như đã ăn hết rồi."<br/><br/>Cậu bé có vẻ rất tin tưởng cô, sắc mặt lập tức tốt lên, cẩn thận cầm bát lên uống một ngụm, đôi mắt liền sáng lên.<br/><br/>Sau khi xác nhận rằng trong canh vẫn còn đầy thịt băm, cậu hoàn toàn yên tâm, cầm đũa gắp một chiếc há cảo hấp.<br/><br/>Giang Nhất Ẩm nhận thấy, tuy cậu cầm đũa còn vụng về nhưng động tác rất chuẩn, có vẻ như những điều cô dạy ngày hôm qua, cậu đều nhớ rất rõ, đúng là một đứa trẻ thông minh.<br/><br/>Sau đó, cô không nói gì thêm, lặng lẽ ăn hết bữa cơm, trước khi cậu bé rời đi cô mới mở lời: "Cậu đợi một chút, tôi có vài điều muốn hỏi."<br/><br/>Động tác của cậu bé khựng lại, đôi mắt đen láy nhìn qua.<br/><br/>Không biết có phải do cô ảo giác hay không, nhưng cô cảm thấy cậu có vẻ lo lắng.<br/><br/>"Đêm qua, hoặc sáng nay, cậu có gặp người sở hữu dị năng không?"<br/><br/>Cậu bé im lặng một lát, từ từ gật đầu.<br/><br/>"Họ có mấy người?"<br/><br/>Cậu không trả lời.<br/><br/>Cô lắc đầu: "Tôi biết cậu nghe hiểu mà, đừng giả vờ ngốc."<br/><br/>Cậu bĩu môi, chậm rãi giơ lên bốn ngón tay.<br/><br/>Giang Nhất Ẩm nheo mắt lại, hôm qua khi cô đuổi Trịnh Nguyên đi, hắn đã mang theo bốn người, cộng với hắn là đúng bốn người.<br/><br/>Cô nghĩ một lát rồi hỏi tiếp: "Vậy cậu gặp họ vào khoảng thời gian nào?"<br/><br/>Cậu bé nghiêng đầu suy nghĩ, rồi bất chợt chỉ về hướng tây, sau đó chậm rãi vẽ một đường cong, ngón tay trượt từ tây sang đông, rồi tiếp tục xuống dưới, cho đến khi chỉ xuống mặt đất.<br/><br/>Cô nhíu mày, mất một lúc lâu mới phản ứng kịp: "Cậu muốn nói là gặp họ lúc trời chưa sáng à?"</p>
                </div>
                <div className={styles.comments}>
                    <Comments/>
                </div>
            </div>
            <Menu />
        </div>
    </div>
  )
}

export default SinglePage