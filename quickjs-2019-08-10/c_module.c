/* File generated automatically by the QuickJS compiler. */

#include "quickjs-libc.h"

const uint32_t c_module_size = 152;

const uint8_t c_module[152] = {
 0x01, 0x07, 0x28, 0x65, 0x78, 0x61, 0x6d, 0x70,
 0x6c, 0x65, 0x73, 0x2f, 0x63, 0x5f, 0x6d, 0x6f,
 0x64, 0x75, 0x6c, 0x65, 0x2e, 0x6a, 0x73, 0x10,
 0x2e, 0x2f, 0x66, 0x69, 0x62, 0x2e, 0x73, 0x6f,
 0x06, 0x66, 0x69, 0x62, 0x0e, 0x63, 0x6f, 0x6e,
 0x73, 0x6f, 0x6c, 0x65, 0x06, 0x6c, 0x6f, 0x67,
 0x16, 0x48, 0x65, 0x6c, 0x6c, 0x6f, 0x20, 0x57,
 0x6f, 0x72, 0x6c, 0x64, 0x10, 0x66, 0x69, 0x62,
 0x28, 0x31, 0x30, 0x29, 0x3d, 0x0e, 0x9c, 0x03,
 0x01, 0x9e, 0x03, 0x00, 0x00, 0x01, 0x00, 0xa0,
 0x03, 0x00, 0x0d, 0x00, 0x06, 0x01, 0x9e, 0x01,
 0x00, 0x00, 0x00, 0x05, 0x01, 0x00, 0x2c, 0x00,
 0xa0, 0x03, 0x00, 0x0c, 0x38, 0xd1, 0x00, 0x00,
 0x00, 0x42, 0xd2, 0x00, 0x00, 0x00, 0x04, 0xd3,
 0x00, 0x00, 0x00, 0x24, 0x01, 0x00, 0x0e, 0x38,
 0xd1, 0x00, 0x00, 0x00, 0x42, 0xd2, 0x00, 0x00,
 0x00, 0x04, 0xd4, 0x00, 0x00, 0x00, 0x64, 0x00,
 0x00, 0xba, 0x0a, 0xec, 0x24, 0x02, 0x00, 0x29,
 0x9c, 0x03, 0x01, 0x04, 0x00, 0x00, 0x08, 0x62,
};

int main(int argc, char **argv)
{
  JSRuntime *rt;
  JSContext *ctx;
  rt = JS_NewRuntime();
  ctx = JS_NewContextRaw(rt);
  JS_AddIntrinsicBaseObjects(ctx);
  JS_AddIntrinsicDate(ctx);
  JS_AddIntrinsicEval(ctx);
  JS_AddIntrinsicStringNormalize(ctx);
  JS_AddIntrinsicRegExp(ctx);
  JS_AddIntrinsicJSON(ctx);
  JS_AddIntrinsicProxy(ctx);
  JS_AddIntrinsicMapSet(ctx);
  JS_AddIntrinsicTypedArrays(ctx);
  JS_AddIntrinsicPromise(ctx);
  js_std_add_helpers(ctx, argc, argv);
  {
    extern JSModuleDef *js_init_module_fib(JSContext *ctx, const char *name);
    js_init_module_fib(ctx, "examples/fib.so");
  }
  js_std_eval_binary(ctx, c_module, c_module_size, 0);
  js_std_loop(ctx);
  JS_FreeContext(ctx);
  JS_FreeRuntime(rt);
  return 0;
}
