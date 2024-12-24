

function getNavbarLaptop() {
    const navbarForLaptop = document.getElementById("navbarLaptop");
    navbarForLaptop.innerHTML = '';

        navbarForLaptop.innerHTML += `
            <div class="col-4">
                <img src="assets/icon/Alean.png" alt="" height="60px" style="margin-left: 90px;" >
            </div>

            <div class="col-8 collapse navbar-collapse">
                <ul class="navbar-nav">
                    <li>
                        <div class="dropdown mx-3">
                            <div class="dropdown-hover">
                                <a class="btn btn-secondary dropdown-toggle" href="#" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    របៀបទស្សនា</a>
                
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">របៀបបង្កើត Account</a></li>
                                    <li><a class="dropdown-item" href="#">របៀបបញ្ចូលទឹកប្រាក់</a></li>
                                    <li><a class="dropdown-item" href="#">របៀបទិញរឿង</a></li>
                                </ul>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div class="dropdown mx-3">
                            <div class="dropdown-hover">
                                <a class="btn btn-secondary dropdown-toggle" href="#" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    ភាសា</a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">និយាយខ្មែរ</a></li>
                                    <li><a class="dropdown-item" href="#">អក្សរខ្មែរ</a></li>
                                </ul>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div class="dropdown mx-3">
                            <div class="dropdown-hover">
                                <a class="btn btn-secondary dropdown-toggle" href="#" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    ប្រភេទរឿង</a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Comedy</a></li>
                                    <li><a class="dropdown-item" href="#">Crime</a></li>
                                    <li><a class="dropdown-item" href="#">Drama</a></li>
                                    <li><a class="dropdown-item" href="#">Horror</a></li>
                                    <li><a class="dropdown-item" href="#">History</a></li>
                                </ul>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div class="dropdown mx-3">
                            <a class="btn btn-secondary" href="#"> ឥតគិតថ្លៃ Free</a>
                        </div>
                    </li>

                    <li>
                        <div class="dropdown mx-3">
                            <a class="btn btn-secondary" href="#"> គិតថ្លៃ Pay</a>
                        </div>
                    </li>

                    <li>
                        <div class="dropdown ms">
                            <a class="btn btn-secondary" href="#"><i class="bi bi-person-circle"></i>Login</a>
                        </div>
                    </li>
                </ul>
            </div>

            <button class="navbar-toggler border-0 shadow-none" data-bs-toggle="offcanvas" data-bs-target="#offcanvasEnd">
                <i class="bi bi-menu-button-wide-fill text-light"></i>
            </button>
        `;



}


getNavbarLaptop();


