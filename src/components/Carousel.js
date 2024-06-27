import React from 'react'

export default function Carousel() {

    return (
        <div>



            <div style={{ marginBottom: '20px', paddingBottom: '30px', maxHeight: '700px' }}>
                <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="2000">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://cdn.pixabay.com/photo/2024/05/08/10/05/women-8747913_1280.jpg" class="d-block w-100" style={{ maxHeight: '700px', objectFit: 'cover' }} />
                        </div>

                        <div class="carousel-item">
                            <img src="https://cdn.pixabay.com/photo/2020/10/19/09/44/woman-5667299_1280.jpg" class="d-block w-100" style={{ maxHeight: '700px', objectFit: 'cover' }} />
                        </div>
                        <div class="carousel-item">
                            <img src="https://cdn.pixabay.com/photo/2017/08/06/15/13/woman-2593366_1280.jpg" class="d-block w-100" style={{ maxHeight: '700px', objectFit: 'cover' }} />
                        </div>
                        <div class="carousel-item">
                            <img src="https://cdn.pixabay.com/photo/2024/05/08/10/05/women-8747913_1280.jpg" class="d-block w-100" style={{ maxHeight: '700px', objectFit: 'cover' }} />
                        </div>
                        <div class="carousel-item">
                            <img src="https://cdn.pixabay.com/photo/2018/02/25/06/28/man-3179826_1280.jpg" class="d-block w-100" style={{ maxHeight: '700px', objectFit: 'cover' }} />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>


        </div>
    )
}

