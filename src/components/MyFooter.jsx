function MyFooter() {
    return (
        <footer class="footer p-5 text-white bg-dark">
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <h2>Paolo&co</h2>
                </div>
                <div class="col-md-3">
                    <h5>About Us</h5>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id omnis est enim nemo possimus, debitis sequi repudiandae aut, similique laboriosam, dolor quasi ex. Natus, molestiae. Dolorem vel molestias laborum nam!
                    </p>
                </div>
                <div class="col-md-3">
                    <h5>Contact Us</h5>
                    <ul class="list-unstyled">
                        <li>Email: info@example.com</li>
                        <li>Phone: +1233567890</li>
                        <li>Address: 123 Street, City, Country</li>
                    </ul>
                </div>
                <div class="col-md-3">
                    <h5>Follow Us</h5>
                    <ul class="list-inline footer-links">
                        <li class="list-inline-item">
                          <a href="#">
                                <i class="fab fa-facebook"></i>
                          </a>
                          </li>
                        <li class="list-inline-item">
                          <a href="#">
                                <i class="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li class="list-inline-item">
                          <a href="#">
                                <i class="fab fa-instagram"></i>
                          </a>
                        </li>
                        <li class="list-inline-item">
                          <a href="#">
                                <i class="fab fa-linkedin"></i>
                          </a>
                        </li>
                    </ul>
                </div>
            </div>
            <hr/>
            <div class="row">
                <div class="col-md-6">
                    <p>&copy; 2024 Your Website. All rights reserved.</p>
                </div>
                <div class="col-md-6 text-end">
                    <ul class="list-inline footer-links">
                        <li class="list-inline-item">
                            <a href="#" class="text-white">
                                Privacy Policy
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a href="#" class="text-white">
                                Terms of Service
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a href="#" class="text-white">
                                Sitemap
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    );
}

export default MyFooter