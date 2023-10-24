function copyToClipboard() {
  // 获取要复制的文本
  var text = document.getElementById("pctxt").textContent;

  // 创建一个文本输入框
  var input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("value", text);
  document.body.appendChild(input);

  // 选中文本
  input.select();

  // 复制文本到剪贴板
  document.execCommand("copy");

  // 删除临时创建的文本输入框
  document.body.removeChild(input);

  // 弹窗提示复制成功
  layer.msg("一段提示信息");
}
