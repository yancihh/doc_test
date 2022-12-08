<template>
  <div>
    <div class="boxx">
      <div
        class="bbb"
        v-for="(res_root, index_root) in newJsonArr"
        :key="index_root"
      >
        <div class="ooo">{{ res_root.title }}</div>
        <div
          class="xxxx"
          v-for="(res_parent, index) in res_root.value"
          :key="index"
        >
          <div
            class="a"
            v-for="(res_child, index_child) in res_parent"
            :key="index_child"
          >
            {{ res_child.kpi_name }}
          </div>
        </div>
      </div>
    </div>
    <button @click="setData">请求测试</button>
  </div>
</template>

<script>
export default {
  name: "performance-assessment",
  data() {
    return {
      jsonObj: {},
      data: [],
      newJsonArr: [],
    };
  },
  methods: {
    setData() {
      this.$http.get("/api/get").then((res) => {
        this.jsonObj = res.data;
        for (const key in this.jsonObj) {
          const obj = {};
          obj.title = key;
          obj.value = this.jsonObj[key];
          this.data.push(obj);
        }
        let childArr = null;
        this.data.map((res_parent) => {
          const parentArr = [];
          res_parent.value.map((res, index) => {
            if (index % 2 === 0) {
              childArr = [];
              childArr.push(res);
            } else {
              childArr.push(res);
              parentArr.push(childArr);
            }
            if (index % 2 === 0 && index === res_parent.value.length - 1) {
              parentArr.push(childArr);
            }
          });
          const rootObj = { title: res_parent.title, value: parentArr };
          this.newJsonArr.push(rootObj);
        });
      });
    },
  },
};
</script>

<style lang="less">
.boxx {
  width: 900px;
  // height: 500px;
  padding-bottom: 15px;
  background: red;
  overflow-x: scroll;
  display: flex;
  .bbb {
    display: flex;
    margin-left: 15px;
    .xxxx {
      .a {
        width: 150px;
        height: 150px;
        background: #6666;
        margin-top: 15px;
        margin-left: 15px;
      }
    }
  }
}
</style>
