<template>
  <div class="editor-container">
    <vue-editor
      id="editor"
      useCustomImageHandler
      @imageAdded="handleImageAdded"
      v-model="content"></vue-editor>

      <div class="btn">
        <el-button class="btnn"  type="primary">提交</el-button>
      </div>
  </div>
</template>
<script>
import { VueEditor } from "vue2-editor/dist/vue2-editor.core.js";
export default {
  data() {
    return {
      content: "<h3>文本编辑器</h3>",
    };
  },
  components: {
    VueEditor,
  },
  methods: {
    /**
     * @param {Object} file 图片参数
     * @param {Object} Editor 编辑器实例
     */
    handleImageAdded() {
      console.log("upload image");
    },
  },
};
</script>

<style >
@import "~vue2-editor/dist/vue2-editor.css";
/* Import the Quill styles you want */
@import "~quill/dist/quill.core.css";
@import "~quill/dist/quill.bubble.css";
@import "~quill/dist/quill.snow.css";
.editor-container {
  padding: 40px;
}
.expain {
  font-size: 16px;
  line-height: 60px;
  background: #f2f6fc;
  margin-bottom: 20px;
}
.expain a {
  color: #bdb7ff;
}
#editor {
  height: 400px;
}

.btn{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
}
.btnn{
    margin-top: 20px;
}
</style>
