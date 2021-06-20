<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        老司机
      </h1>
      <div class="links">
        <a
          href="https://blog.exdrive.cn"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          官方博客
        </a>
        <a
          href="https://www.zhihu.com/people/protemplar"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          知乎
        </a>
        <a
          href="https://space.bilibili.com/195696636"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          bilibili
        </a>
      </div>
      <div style="width: 100%; margin-top: 50px;">
        <img src="/images/exdrive_qr.png" style="width: 120px; height: 120px;"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.foot {
  margin: 0 auto;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
}

</style>
