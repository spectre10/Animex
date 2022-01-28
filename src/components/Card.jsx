import React from "react";

function Card() {
  return (
    <section>
      <div className="container">
        {/* <div class="card">
				<div class="content">
					<div class="imgBx">
						<img src="https://image.flaticon.com/icons/png/256/4213/4213732.png"/>
					</div>
					<div class="contentBx">
						<h3>Lion<br/><span>Happy Birthday</span></h3>
					</div>
				</div>
				<ul class="sci">
					<li>
						<a href="">happy</a>
					</li>
					<li>
						<a href="">birth</a>
					</li>
					<li>
						<a href="">day</a>
					</li>
				</ul>
			</div> */}
        {/* <div class="card">
				<div class="content">
					<div class="imgBx">
						<img src="https://image.flaticon.com/icons/png/256/4213/4213736.png"/>
					</div>
					<div class="contentBx">
						<h3>Frog<br/><span>Happy Birthday</span></h3>
					</div>
				</div>
				<ul class="sci">
					<li>
						<a href="">happy</a>
					</li>
					<li>
						<a href="">birth</a>
					</li>
					<li>
						<a href="">day</a>
					</li>
				</ul>
			</div> */}
        <div className="card">
          <div className="content">
            <div className="imgBx">
              <img
                src="https://image.flaticon.com/icons/png/256/4213/4213641.png"
                alt=""
              />
              {/* <i class="fas fa-search fa-8x"></i> */}
              {/* <iframe src="https://giphy.com/embed/J5G9LaVDOHjPXWiPpM" width="170" height="150" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/lupa-sketchinabook-anandagiraldi-J5G9LaVDOHjPXWiPpM">via GIPHY</a></p> */}
            </div>
            <div className="contentBx">
              <h3>
                Giraffe
                <br />
                <span>Happy Birthday</span>
              </h3>
            </div>
          </div>
          <ul className="sci">
            <li>
              <p>happy</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
export default Card;
