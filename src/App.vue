<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
$xxl-font: 65px;
$xl-font: 45px;
$l-font: 28px;
$m-font: 24px;
$s-font: 20px;
$xs-font: 16px;
$xxs-font: 14px;

$screen-sm-max: 576px;
$screen-md-max: 768px;
$screen-lg-max: 992px;
$screen-xl-max: 1200px;

// Small devices
@mixin sm {
    @media (max-width: #{$screen-sm-max}) {
        @content;
    }
 }
 
 // Medium devices
 @mixin md {
    @media (max-width: #{$screen-md-max}) {
        @content;
    }
 }
 
 // Large devices
 @mixin lg {
    @media (max-width: #{$screen-lg-max}) {
        @content;
    }
 }
 
 // Extra large devices
 @mixin xl {
    @media (max-width: #{$screen-xl-max}) {
        @content;
    }
 }
* {
    margin: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    -webkit-transition: all .3s;
    -o-transition: all .3s;
    transition: all .3s;
}

.content__horisontal {
    width: 100%;
    height: 100vh;
    background-image: -o-linear-gradient(150deg, #1498e3, #e9eb24, #ff5bb4);
    background-image: linear-gradient(-60deg, #1498e3, #e9eb24, #ff5bb4);
    background-size: 600% 100%;
    -webkit-animation: rainbow 10s ease-in-out infinite alternate;
    animation: rainbow 10s ease-in-out infinite alternate;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    overflow-x:hidden;
    text-align:left;
    .rooms {
        margin: 0 auto;
        background: #ffffff;
        display: grid;    
        grid-gap: 8px;
        grid-template-columns: 215px 215px 215px 215px;
        grid-template-rows: 1fr;
        position: relative;
        width: 903px;
        min-height: 490px;
        border-right: 7px solid #ffffff;
        border-left: 7px solid #ffffff;
        @include md {
            overflow-x:scroll;
        }
        .room {
            background: #e6e1e1;
            width:215px;
            padding-bottom: 45px;
            cursor: grab;
            position: absolute;   
            top: 10px;
            left:3px;
            bottom: 10px;
            -webkit-transition: all 0s;
            -o-transition: all 0s;
            transition: all 0s;
            &:after {
              content: "";
              width: 100%;
              height: 100%;
              position: absolute;
              top: 0;
              cursor: grab;
            }
            &:nth-child(1) {
              grid-area: 1/1/1/1;
            }
            &:nth-child(2) {
              grid-area: 1/2/1/2;
            }
            &:nth-child(3) {
              grid-area: 1/3/1/3;
            }
            &:nth-child(4) {
              grid-area: 1/4/1/4;
            }
            &:active {
              cursor:grabbing;
            }
            .room__info {
                padding: 10px 17px;
                font-weight:500;
            }
            .room__title {
                font-weight: 900;
                text-transform: uppercase;
                line-height: 32px;
                font-size: $s-font;
            }
            .room__img img {
                width: 100%;
                height: 155px;
                object-fit: cover;
            }
            .room__description {
                width: 100%;
                display: inline-block;
            }
            .room__status {
                color: red;
                position:absolute;
                bottom:33px;
                right:15px;
                font-size:$xxs-font;
            }
            .room__type {
                position:absolute;
                right:15px;
                bottom:10px;
                color:#9b9b9b;
                font-size:$xxs-font;
                &.office-class {
                  color:rgb(7, 165, 80)
                }
            }
        }
    }
}


@-webkit-keyframes rainbow {
    0% {
      background-position: 1%
    }
    100% {
      background-position: 99%
    }
}

@keyframes rainbow {
    0% {
      background-position: 1%
    }
    100% {
      background-position: 99%
    }
}

.content__vertical .rooms 
  .room {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  align-items: start;
  text-align: left;
  justify-content: space-around;
  grid-gap: 50px;
  grid-template-areas: 'img txt txt txt';
  width: 85%;
  margin: 0 auto;
  @include lg {
    grid-gap: 20px;
    width: 93%;
  }
  &:nth-child(even) {
    grid-template-areas: 'txt txt txt img';
    text-align: right;
  }
  &__img {
    grid-area: img;
    text-align: center;
    margin: 0 auto;
    img {
      width: 20vw;
      height: auto;
      object-fit: cover;
      @include md {
        width: 100%;
        height: 200px;
        &:hover {
          width: auto;
        }
      }
    }
  }
  &__info {
    grid-area: txt;
    line-height: 25px;
    font-weight: 500;
    display: grid;
    height: 100%;
    grid-template-rows: auto 35px;
  }
  &__title {
    font-weight: 900;
    text-transform: uppercase;
    line-height: 50px;
    font-size: $l-font;    
  }
  &__description {
    width: 60%;
    display: inline-block;
    @include lg{
      width: 100%;
    }
  }
  &__link {
    a {
      color: #f900ef;
    }
  }
}

.page-wrap {
  margin-bottom:100px;
}
.rooms__all {
  width: 310px;
  text-align: center;
  margin: 100px auto;
  border-width: 5px;
  border-style: solid;
  border-color: transparent;
  background-image: linear-gradient(-60deg, #1498e3, #e9eb24, #ff5bb4);
  background-size: 500% 100%;
  animation: rainbow 10s ease-in-out infinite alternate;
  a {
    text-decoration: none;
    text-transform: uppercase;
    font-size: $s-font;
    line-height: 55px;
    color: #272727;
    background: white;
    width:100%;
    display:inline-block;
    &:hover {
      background: transparent;
    }
  }
} 

header {
  width: 85%;
  height: 265px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto 2fr 1fr;
  align-items: center;
  grid-gap: 20px;
  @include lg {
    width: 93%;
  }
  @include sm {
    height: 200px;
    grid-template-columns: auto 2fr;
    grid-template-rows: 75px 70px;
    grid-gap: 0px;
    margin-top: 80px;
  }
  &.page {
    height: 150px;
    margin-bottom:50px;
    grid-template-columns: auto 2fr 1fr;
    @include md {
      grid-template-columns: auto 2fr auto;
    }
    @include sm {
      grid-gap: 20px;
      margin-top: 0;
      grid-template-rows: none;
    }
    a {
      border: 2px solid #e0e0e0;
      border-radius: 6px;
      line-height: 40px;
      background: #f5f5f5;
      color: #353535;
      padding: 7px 32px;
      font-size: 24px;
      text-decoration: none;
      display: flex;
      justify-content: center;
      @include md {
        width: auto;
        font-size: $s-font;
        line-height: 42px;
      }
      @include sm {
        display:none;
      }
    }
  }
  h1 {
    font-size: $xxl-font;
    font-weight: 500;
    text-transform: uppercase;
    @include md {
        font-size: $xl-font;
    }
  }
  hr {
    height: 4px;
    background: #e8e8e8;
    border: none;
  }
  .search {
    input {
      border: 2px solid #e0e0e0;
      border-radius: 6px;
      line-height: 56px;
      background: #f5f5f5;
      color: #353535;
      padding: 0 0 0 27px;
      width: 364px;
      font-size: $m-font;
      @include md {
        width: 240px;
        font-size: $s-font;
        line-height: 42px;
      }
    }
  }
}
.search {
  &__title {
    width:85%;
    margin: 0 auto 50px;
  }
}
#cook img {
    margin: 0 auto;
    display: block;
}

</style>
