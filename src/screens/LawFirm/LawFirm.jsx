import React from "react";
import { IconsPxSocial } from "../../components/IconsPxSocial";
import { IconsSocial } from "../../components/IconsSocial";
import { HiconBoldGift1 } from "../../icons/HiconBoldGift1";
import { HiconBoldMessage35 } from "../../icons/HiconBoldMessage35";
import { HiconLinearDown1 } from "../../icons/HiconLinearDown1";
import { HiconLinearDown11 } from "../../icons/HiconLinearDown11";
import { Icon } from "../../icons/Icon";
import { Icon2 } from "../../icons/Icon2";
import "./style.css";

export const LawFirm = () => {
  const emailhandle = () => {
    let inputfield = document.getElementById("input_fld");

    inputfield.value = "";
  };
  const Send = () => {
    let inputfield = document.getElementById("namedata");
    let emailfield = document.getElementById("emaildata");

    inputfield.value = "";
    emailfield.value = "";
  };

  return (
    <div className="law-firm">
      <div className="div">
        <div className="overlap">
          <div className="group">
            <div className="navbar">
              <button className="text-wrapper">Home</button>
              <button className="text-wrapper-2">Attorneys</button>
              <button className="text-wrapper-3">Practice Areas</button>
              <button className="text-wrapper-4">About Us</button>
            </div>
            <div className="overlap-group-wrapper">
              <button className="overlap-group">
                <h1 className="text-wrapper-5">Contact Now</h1>
              </button>
            </div>
            <img
              className="img"
              alt="Group"
              src="https://c.animaapp.com/LblpmfO5/img/group-10386-1@2x.png"
            />
            <p className="you-don-t-have-to">
              <span className="span">
                You don’t have to <br />
              </span>
              <span className="text-wrapper-6">Fight them Alone.</span>
            </p>
            <div className="group-2">
              <div className="group-3">
                <HiconBoldMessage35
                  className="hicon-bold-message"
                  color="white"
                />
                <input
                  className="text-wrapper-7"
                  id="input_fld"
                  placeholder="Enter your eamil address"
                ></input>
              </div>
              <div className="div-wrapper">
                <button
                  className="overlap-group-2 email_btn"
                  onClick={emailhandle}
                >
                  <div className="text-wrapper-8">Let’s Talk</div>
                </button>
              </div>
            </div>
            <p className="p">
              Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
              curabitur sodales conubia ut inceptos faucibus himenaeos tortor
              eget, hac massa gravida arcu interdum proin curae.
            </p>
          </div>
          <div className="overlap-wrapper">
            <div className="overlap-2">
              <img
                className="img-2"
                alt="Shape"
                src="https://c.animaapp.com/LblpmfO5/img/shape@2x.png"
              />
              <img
                className="img-2"
                alt="Mask group"
                src="https://c.animaapp.com/LblpmfO5/img/mask-group@2x.png"
              />
              <img
                className="image"
                alt="Image"
                src="https://c.animaapp.com/LblpmfO5/img/image.png"
              />
            </div>
          </div>
        </div>
        <div className="overlap-3">
          <div className="group-4">
            <div className="let-s-introduce">
              Let’s Introduce
              <br />
              Ourself
            </div>
            <div className="group-5">
              <div className="text-wrapper-9">Criminal Lawyer</div>
              <p className="amet-minim-mollit">
                Amet minim mollit non deserunt ullamco est
                <br />
                sit aliqua dolor do amet sint. Velit officia consequatduis
                <br />
                enim velit mollit Exercitation.
              </p>
            </div>
          </div>
          <img
            className="line"
            alt="Line"
            src="https://c.animaapp.com/LblpmfO5/img/line-40.svg"
          />
        </div>
        <div className="group-6">
          <div className="text-wrapper-10">Why Choose us?</div>
          <div className="group-7">
            <div className="overlap-4">
              <div className="hicon-bold-gift-wrapper">
                <HiconBoldGift1 className="hicon-bold-gift" />
              </div>
              <div className="text-wrapper-11">98% Success Rate</div>
              <div className="group-8">
                <button className="overlap-group-3">
                  <div className="text-wrapper-12">Read More</div>
                </button>
              </div>
              <p className="amet-minim-mollit-2">
                Amet minim mollit non deserunt ullamco est
                <br />
                sit aliqua dolor do amet sint. Velit officia
                <br />
                consequatduis enim velit mollit Exer.
              </p>
            </div>
          </div>
          <div className="group-9">
            <div className="overlap-5">
              <div className="hicon-bold-gift-wrapper">
                <HiconBoldGift1 className="hicon-bold-gift" />
              </div>
              <div className="text-wrapper-11">100% Success Rate</div>
              <div className="group-8">
                <button className="overlap-group-3">
                  <div className="text-wrapper-12">Read More</div>
                </button>
              </div>
              <p className="amet-minim-mollit-2">
                Amet minim mollit non deserunt ullamco est
                <br />
                sit aliqua dolor do amet sint. Velit officia
                <br />
                consequatduis enim velit mollit Exer.
              </p>
            </div>
          </div>
          <div className="group-10">
            <div className="overlap-4">
              <div className="hicon-bold-gift-wrapper">
                <HiconBoldGift1 className="hicon-bold-gift" />
              </div>
              <div className="text-wrapper-11">100% Success Rate</div>
              <div className="group-8">
                <button className="overlap-group-3">
                  <div className="text-wrapper-12">Read More</div>
                </button>
              </div>
              <p className="amet-minim-mollit-2">
                Amet minim mollit non deserunt ullamco est
                <br />
                sit aliqua dolor do amet sint. Velit officia
                <br />
                consequatduis enim velit mollit Exer.
              </p>
            </div>
          </div>
        </div>
        <div className="group-11">
          <div className="overlap-6">
            <div className="text-wrapper-13">Partnership LAW</div>
          </div>
          <div className="overlap-7">
            <div className="text-wrapper-14">BUSINESS LAW</div>
          </div>
          <div className="text-wrapper-15">Area of Practices</div>
          <div className="overlap-8">
            <div className="text-wrapper-16">ELDER ABUSE</div>
          </div>
          <div className="overlap-9">
            <div className="text-wrapper-17">REAL ESTATE LAW</div>
          </div>
          <div className="LANDLORD-DISPUTES-wrapper">
            <div className="LANDLORD-DISPUTES">
              <br />
              LANDLORD DISPUTES
            </div>
          </div>
          <div className="overlap-10">
            <div className="text-wrapper-18">BUSINESS LAW</div>
          </div>
        </div>
        <div className="group-12">
          <div className="what-says-our-happy">
            What says our
            <br />
            happy Clients
          </div>
          <div className="group-13">
            <div className="hicon-linear-down-wrapper">
              <HiconLinearDown11
                className="hicon-linear-down"
                color="#373737"
              />
            </div>
            <div className="hicon-linear-down-1-wrapper">
              <HiconLinearDown1 className="hicon-linear-down-1" />
            </div>
          </div>
          <div className="group-14">
            <div className="overlap-group-4">
              <img
                className="ellipse"
                alt="Ellipse"
                src="https://c.animaapp.com/LblpmfO5/img/ellipse-14-2@2x.png"
              />
              <p className="amet-minim-mollit-3">
                Amet minim mollit non deserunt ullamco est
                <br />
                sit aliqua dolor do amet sint. Velit officia
                <br />
                consequatduis enim velit mollit Exer. sit
                <br />
                aliqua dolor do amet sint. Velit officia
              </p>
              <div className="text-wrapper-19">Jane Cooper</div>
              <div className="text-wrapper-20">Ceo of Hunt</div>
            </div>
          </div>
          <div className="overlap-11">
            <img
              className="ellipse-2"
              alt="Ellipse"
              src="https://c.animaapp.com/LblpmfO5/img/ellipse-14-1@2x.png"
            />
            <p className="amet-minim-mollit-3">
              Amet minim mollit non deserunt ullamco est
              <br />
              sit aliqua dolor do amet sint. Velit officia
              <br />
              consequatduis enim velit mollit Exer. sit
              <br />
              aliqua dolor do amet sint. Velit officia
            </p>
            <div className="text-wrapper-19">Devon Lane</div>
            <div className="text-wrapper-20">Ceo of Hunt</div>
          </div>
          <div className="group-15">
            <div className="overlap-group-4">
              <img
                className="ellipse-2"
                alt="Ellipse"
                src="https://c.animaapp.com/LblpmfO5/img/ellipse-14@2x.png"
              />
              <p className="amet-minim-mollit-3">
                Amet minim mollit non deserunt ullamco est
                <br />
                sit aliqua dolor do amet sint. Velit officia
                <br />
                consequatduis enim velit mollit Exer. sit
                <br />
                aliqua dolor do amet sint. Velit officia
              </p>
              <div className="text-wrapper-19">Robert Fox</div>
              <div className="text-wrapper-20">Ceo of Hunt</div>
            </div>
          </div>
        </div>
        <div className="group-16">
          <div className="group-17">
            <div className="group-18">
              <div className="group-19">
                <div className="first-page">Home</div>
                <div className="second-page">Attorneys</div>
                <p className="third-page">
                  <span className="text-wrapper-6">Practice Areas</span>
                  <span className="text-wrapper-21">&nbsp;</span>
                </p>
                <div className="fifth-page">About Us</div>
              </div>
              <div className="group-20">
                <IconsSocial className="icons-16px-social-instagram" />
                <Icon2 className="icon-2" color="#FDD65B" />
                <IconsPxSocial className="icons-16px-social-twitter-1" />
                <Icon className="icon-instance" />
              </div>
            </div>
            <div className="group-21">
              <p className="element-acme-all-rig">
                © 2020 Acme. All right reserved.
              </p>
              <div className="text-wrapper-22">Privacy Policy</div>
              <div className="text-wrapper-23">Terms of Service</div>
            </div>
          </div>
          <img
            className="group-22"
            alt="Group"
            src="https://c.animaapp.com/LblpmfO5/img/group-10386-1@2x.png"
          />
        </div>
        <div className="group-23">
          <div className="text-wrapper-24">Our Team</div>
          <div className="group-24">
            <img
              className="ellipse-3"
              alt="Ellipse"
              src="https://c.animaapp.com/LblpmfO5/img/ellipse-15-4@2x.png"
            />
            <div className="group-25">
              <div className="text-wrapper-25">Danial Def</div>
              <div className="text-wrapper-26">301 Cases</div>
            </div>
          </div>
          <div className="group-26">
            <img
              className="ellipse-3"
              alt="Ellipse"
              src="https://c.animaapp.com/LblpmfO5/img/ellipse-15-3@2x.png"
            />
            <div className="group-27">
              <div className="text-wrapper-25">Colleen</div>
              <div className="text-wrapper-26">180 Cases</div>
            </div>
          </div>
          <div className="group-28">
            <img
              className="ellipse-3"
              alt="Ellipse"
              src="https://c.animaapp.com/LblpmfO5/img/ellipse-15-2@2x.png"
            />
            <div className="group-29">
              <div className="text-wrapper-25">Haldone</div>
              <div className="text-wrapper-26">212 Cases</div>
            </div>
          </div>
          <div className="group-30">
            <img
              className="ellipse-3"
              alt="Ellipse"
              src="https://c.animaapp.com/LblpmfO5/img/ellipse-15-1@2x.png"
            />
            <div className="group-31">
              <div className="text-wrapper-25">Cesforila</div>
              <div className="text-wrapper-26">470 Cases</div>
            </div>
          </div>
          <div className="group-32">
            <img
              className="ellipse-3"
              alt="Ellipse"
              src="https://c.animaapp.com/LblpmfO5/img/ellipse-15@2x.png"
            />
            <div className="group-33">
              <div className="text-wrapper-25">Nik Jeo</div>
              <div className="text-wrapper-26">350 Cases</div>
            </div>
          </div>
          <div className="group-wrapper">
            <div className="group-34">
              <img
                className="ellipse-3"
                alt="Ellipse"
                src="https://c.animaapp.com/LblpmfO5/img/ellipse-16@2x.png"
              />
              <div className="group-35">
                <div className="text-wrapper-27">Sanfole</div>
                <div className="text-wrapper-28">850 Cases</div>
              </div>
            </div>
          </div>
        </div>
        <div className="group-36">
          <div className="text-wrapper-29">FAQ</div>
          <p className="amet-minim-mollit-4">
            Amet minim mollit non deserunt ullamco est sit
            <br />
            aliqua dolor do amet sint.
          </p>
          <div className="group-37">
            <p className="amet-minim-mollit-5">
              Amet minim mollit non deserunt ullamco est sit
              <br />
              aliqua dolor do amet sint. Velit officia consequatduis
              <br />
              enim velit mollit Exer. Amet minim mollit non deserunt
              <br />
              ullamco est sit aliqua dolor do amet sint. Velit officia
              consequatduis enim velit mollit Exer.
            </p>
            <p className="text-wrapper-30">
              Do I need a personal injury report?
            </p>
            <p className="text-wrapper-31">How much is my case worth?</p>
            <p className="text-wrapper-32">
              What should I do right after car accidect
            </p>
            <p className="text-wrapper-33">How much is my case worth?</p>
            <div className="group-38">
              <div className="overlap-group-5">
                <div className="text-wrapper-34">+</div>
              </div>
            </div>
            <div className="group-39">
              <div className="overlap-group-5">
                <div className="text-wrapper-34">+</div>
              </div>
            </div>
            <div className="group-40">
              <div className="overlap-group-5">
                <div className="text-wrapper-34">+</div>
              </div>
            </div>
            <img
              className="line-2"
              alt="Line"
              src="https://c.animaapp.com/LblpmfO5/img/line-4.svg"
            />
            <img
              className="line-3"
              alt="Line"
              src="https://c.animaapp.com/LblpmfO5/img/line-4.svg"
            />
            <img
              className="line-4"
              alt="Line"
              src="https://c.animaapp.com/LblpmfO5/img/line-6.svg"
            />
          </div>
        </div>
        <div className="group-41">
          <div className="group-42">
            <div className="text-wrapper-35">Subscribe Our Newsletter</div>
            <div className="group-43">
              <div className="overlap-group-6">
                <input
                  id="namedata"
                  className="text-wrapper-36"
                  placeholder="Name"
                ></input>
              </div>
              <div className="overlap-12">
                <input
                  id="emaildata"
                  className="text-wrapper-37"
                  placeholder="Enter your Email"
                ></input>
              </div>
              <button className="overlap-13" onClick={Send}>
                <div className="text-wrapper-38">SEND</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
