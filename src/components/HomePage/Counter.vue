<template>
  <div class="counter-component">
    <div class="counter-btn" @click="minHandle">-</div>
    <div class="counter-show">
      <input type="text" v-model="counter" @keyup="inputHandle" />
    </div>
    <div class="counter-btn" @click="addHandle">+</div>
  </div>
</template>

<script>
export default {
  name:"Counter",
  data() {
    return {
      counter: 1,
    };
  },
  props: {
    counterObj: {
      type: Object,
      default: {
        min: 1,
        max: 1,
      },
    },
  },
  methods: {
    minHandle() {
      if (this.counter <= this.counterObj.min) {
        return;
      }
      this.counter--;
    },
    addHandle() {
      if (this.counter >= this.counterObj.max) {
        return;
      }
      this.counter++;
    },
    inputHandle() {
      let fix; // 最终值
      if (typeof this.counter === "string") {
        fix = Number(this.counter.replace(/\D/g, ""));
      } else {
        // 如果用户输入的是字符串，则将最小值赋值给fix
        fix = this.counterObj.min;
      }
      if (fix <= this.counterObj.min || fix > this.counterObj.max) {
        fix = this.counterObj.min;
      }
      this.counter = fix;
    },
  },
};
</script>

<style lang="less" scoped>
.counter-component {
  position: relative;
  display: inline-block;
  overflow: hidden;
  vertical-align: middle;
}
.counter-show {
  float: left;
}
.counter-show input {
  border: none;
  border-top: 1px solid #e3e3e3;
  border-bottom: 1px solid #e3e3e3;
  height: 23px;
  line-height: 23px;
  width: 30px;
  outline: none;
  text-indent: 4px;
}
.counter-btn {
  border: 1px solid #e3e3e3;
  float: left;
  height: 25px;
  line-height: 25px;
  width: 25px;
  text-align: center;
  cursor: pointer;
}
.counter-btn:hover {
  border-color: #4fc08d;
  background: #4fc08d;
  color: #fff;
}
</style>