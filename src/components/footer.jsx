import "./footer.css";



function Footer(){

    return(
        <div className="footer">
        <div class="social">
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-facebook"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
        </div>
        <ul class="list">
                <li>
                    <a href="#">Services</a>
                </li>
                <li>
                    <a href="#$">Terms</a>
                </li>
                <li>
                    <a href="#">Privacy Policy</a>
                </li>
            </ul>
            <p class="copyright">Future Coders @ 2022</p>
        </div>
    )

}

export default Footer; 