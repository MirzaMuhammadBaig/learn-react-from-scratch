import React from "react";
import Heading from "./Heading";
import MyImage from "../img/logo192.png";

function SmallWeb() {
  function Header() {
    return (
      <>
        <nav class="navbar bg-warning">
          <div class="container-fluid">
            <a class="navbar-brand" href="/">
              <img src={MyImage} alt="logo" width="60px" />
            </a>
            <a class="navbar-brand" href="/">
              Home
            </a>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>
        <Heading />
      </>
    );
  }

  function Body() {
    return (
      <>
        <div class="container text-center">
          <div class="row align-items-start">
            <div class="col">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus numquam id accusamus commodi vero ipsum ipsa eligendi
              nihil officia animi qui voluptate aut, sapiente error. Ipsam, ex
              natus sequi nemo, eveniet iusto eos, eius et autem ratione a
              voluptatibus nihil alias qui sunt ab!
            </div>
            <div class="col">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus numquam id accusamus commodi vero ipsum ipsa eligendi
              nihil officia animi qui voluptate aut, sapiente error. Ipsam, ex
              natus sequi nemo, eveniet iusto eos, eius et autem ratione a
              voluptatibus nihil alias qui sunt ab!
            </div>
            <div class="col">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus numquam id accusamus commodi vero ipsum ipsa eligendi
              nihil officia animi qui voluptate aut, sapiente error. Ipsam, ex
              natus sequi nemo, eveniet iusto eos, eius et autem ratione a
              voluptatibus nihil alias qui sunt ab!
            </div>
          </div>
          <div class="row align-items-center">
            <div class="col">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              explicabo ducimus saepe, optio eius officiis necessitatibus quia!
              Molestiae, ut explicabo? Natus accusamus dignissimos sequi.
              Libero, sed! Necessitatibus consequuntur at quo, ratione ipsum,
              impedit aspernatur voluptas quis sed accusantium magni corrupti
              libero non tempora optio.
            </div>
            <div class="col">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              eaque cupiditate sunt dolore mollitia cum vel culpa ex, earum
              rerum. Cupiditate laboriosam aliquam ex, deleniti nam assumenda,
              vero optio commodi, porro nulla et minima consequatur distinctio
              ratione non incidunt delectus eaque repudiandae necessitatibus
              vitae.
            </div>
            <div class="col">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              eaque cupiditate sunt dolore mollitia cum vel culpa ex, earum
              rerum. Cupiditate laboriosam aliquam ex, deleniti nam assumenda,
              vero optio commodi, porro nulla et minima consequatur distinctio
              ratione non incidunt delectus eaque repudiandae necessitatibus
              vitae.
            </div>
          </div>
          <div class="row align-items-end">
            <div class="col">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              eaque cupiditate sunt dolore mollitia cum vel culpa ex, earum
              rerum. Cupiditate laboriosam aliquam ex, deleniti nam assumenda,
              vero optio commodi, porro nulla et minima consequatur distinctio
              ratione non incidunt delectus eaque repudiandae necessitatibus
              vitae.
            </div>
            <div class="col">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              eaque cupiditate sunt dolore mollitia cum vel culpa ex, earum
              rerum. Cupiditate laboriosam aliquam ex, deleniti nam assumenda,
              vero optio commodi, porro nulla et minima consequatur distinctio
              ratione non incidunt delectus eaque repudiandae necessitatibus
              vitae.
            </div>
            <div class="col">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              eaque cupiditate sunt dolore mollitia cum vel culpa ex, earum
              rerum. Cupiditate laboriosam aliquam ex, deleniti nam assumenda,
              vero optio commodi, porro nulla et minima consequatur distinctio
              ratione non incidunt delectus eaque repudiandae necessitatibus
              vitae.
            </div>
          </div>
        </div>
      </>
    );
  }

  function Footer() {
    return (
      <>
        <nav class="navbar  bg-warning">
          <div class="container-fluid">
            <div class="container text-center">
              <div class="row align-items-start">
                <div class="col"></div>
                <small class="col">
                  This website have All rights reserved.
                </small>
                <div class="col"></div>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  }

  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
}

export default SmallWeb;
