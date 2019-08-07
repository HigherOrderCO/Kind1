# This file has been generated by node2nix 1.7.0. Do not edit!

{nodeEnv, fetchurl, fetchgit, globalBuildInputs ? []}:

let
  sources = {
    "buffer-to-arraybuffer-0.0.5" = {
      name = "buffer-to-arraybuffer";
      packageName = "buffer-to-arraybuffer";
      version = "0.0.5";
      src = fetchurl {
        url = "https://registry.npmjs.org/buffer-to-arraybuffer/-/buffer-to-arraybuffer-0.0.5.tgz";
        sha1 = "6064a40fa76eb43c723aba9ef8f6e1216d10511a";
      };
    };
    "decode-uri-component-0.2.0" = {
      name = "decode-uri-component";
      packageName = "decode-uri-component";
      version = "0.2.0";
      src = fetchurl {
        url = "https://registry.npmjs.org/decode-uri-component/-/decode-uri-component-0.2.0.tgz";
        sha1 = "eb3913333458775cb84cd1a1fae062106bb87545";
      };
    };
    "decompress-response-3.3.0" = {
      name = "decompress-response";
      packageName = "decompress-response";
      version = "3.3.0";
      src = fetchurl {
        url = "https://registry.npmjs.org/decompress-response/-/decompress-response-3.3.0.tgz";
        sha1 = "80a4dd323748384bfa248083622aedec982adff3";
      };
    };
    "define-properties-1.1.3" = {
      name = "define-properties";
      packageName = "define-properties";
      version = "1.1.3";
      src = fetchurl {
        url = "https://registry.npmjs.org/define-properties/-/define-properties-1.1.3.tgz";
        sha512 = "3MqfYKj2lLzdMSf8ZIZE/V+Zuy+BgD6f164e8K2w7dgnpKArBDerGYpM46IYYcjnkdPNMjPk9A6VFB8+3SKlXQ==";
      };
    };
    "dom-walk-0.1.1" = {
      name = "dom-walk";
      packageName = "dom-walk";
      version = "0.1.1";
      src = fetchurl {
        url = "https://registry.npmjs.org/dom-walk/-/dom-walk-0.1.1.tgz";
        sha1 = "672226dc74c8f799ad35307df936aba11acd6018";
      };
    };
    "elementary-affine-core-0.1.0" = {
      name = "elementary-affine-core";
      packageName = "elementary-affine-core";
      version = "0.1.0";
      src = fetchurl {
        url = "https://registry.npmjs.org/elementary-affine-core/-/elementary-affine-core-0.1.0.tgz";
        sha512 = "5nemEZ6wzDJte3rwRyyS8TyFjOmIEgxgF3BRjfCyrGUVCXA9AU3Y++CkMJcc7Apsb2A1svRryjLoqt2zv/dUDQ==";
      };
    };
    "elementary-affine-net-0.1.0" = {
      name = "elementary-affine-net";
      packageName = "elementary-affine-net";
      version = "0.1.0";
      src = fetchurl {
        url = "https://registry.npmjs.org/elementary-affine-net/-/elementary-affine-net-0.1.0.tgz";
        sha512 = "Scojo5it42a0WeoxqPXON1QtxL4jgvRWNtlCTpjaL8Tn7DSDmjtuJw7itIRfghVsN9vkqhzn6jdUwY/UCqhf3w==";
      };
    };
    "es-abstract-1.13.0" = {
      name = "es-abstract";
      packageName = "es-abstract";
      version = "1.13.0";
      src = fetchurl {
        url = "https://registry.npmjs.org/es-abstract/-/es-abstract-1.13.0.tgz";
        sha512 = "vDZfg/ykNxQVwup/8E1BZhVzFfBxs9NqMzGcvIJrqg5k2/5Za2bWo40dK2J1pgLngZ7c+Shh8lwYtLGyrwPutg==";
      };
    };
    "es-to-primitive-1.2.0" = {
      name = "es-to-primitive";
      packageName = "es-to-primitive";
      version = "1.2.0";
      src = fetchurl {
        url = "https://registry.npmjs.org/es-to-primitive/-/es-to-primitive-1.2.0.tgz";
        sha512 = "qZryBOJjV//LaxLTV6UC//WewneB3LcXOL9NP++ozKVXsIIIpm/2c13UDiD9Jp2eThsecw9m3jPqDwTyobcdbg==";
      };
    };
    "for-each-0.3.3" = {
      name = "for-each";
      packageName = "for-each";
      version = "0.3.3";
      src = fetchurl {
        url = "https://registry.npmjs.org/for-each/-/for-each-0.3.3.tgz";
        sha512 = "jqYfLp7mo9vIyQf8ykW2v7A+2N4QjeCeI5+Dz9XraiO1ign81wjiH7Fb9vSOWvQfNtmSa4H2RoQTrrXivdUZmw==";
      };
    };
    "formality-net-0.1.10" = {
      name = "formality-net";
      packageName = "formality-net";
      version = "0.1.10";
      src = fetchurl {
        url = "https://registry.npmjs.org/formality-net/-/formality-net-0.1.10.tgz";
        sha512 = "/AoLMx58KUEIVr1c9Crdio8JpEofhNyI7VjONNT/EGxB3ST64n3yehXvMusUZjMBe/5fg0edXzWGAzRhGuJfzA==";
      };
    };
    "function-bind-1.1.1" = {
      name = "function-bind";
      packageName = "function-bind";
      version = "1.1.1";
      src = fetchurl {
        url = "https://registry.npmjs.org/function-bind/-/function-bind-1.1.1.tgz";
        sha512 = "yIovAzMX49sF8Yl58fSCWJ5svSLuaibPxXQJFLmBObTuCr0Mf1KiPopGM9NiFjiYBCbfaa2Fh6breQ6ANVTI0A==";
      };
    };
    "global-4.3.2" = {
      name = "global";
      packageName = "global";
      version = "4.3.2";
      src = fetchurl {
        url = "https://registry.npmjs.org/global/-/global-4.3.2.tgz";
        sha1 = "e76989268a6c74c38908b1305b10fc0e394e9d0f";
      };
    };
    "has-1.0.3" = {
      name = "has";
      packageName = "has";
      version = "1.0.3";
      src = fetchurl {
        url = "https://registry.npmjs.org/has/-/has-1.0.3.tgz";
        sha512 = "f2dvO0VU6Oej7RkWJGrehjbzMAjFp5/VKPp5tTpWIV4JHHZK1/BxbFRtf/siA2SWTe09caDmVtYYzWEIbBS4zw==";
      };
    };
    "has-symbols-1.0.0" = {
      name = "has-symbols";
      packageName = "has-symbols";
      version = "1.0.0";
      src = fetchurl {
        url = "https://registry.npmjs.org/has-symbols/-/has-symbols-1.0.0.tgz";
        sha1 = "ba1a8f1af2a0fc39650f5c850367704122063b44";
      };
    };
    "is-callable-1.1.4" = {
      name = "is-callable";
      packageName = "is-callable";
      version = "1.1.4";
      src = fetchurl {
        url = "https://registry.npmjs.org/is-callable/-/is-callable-1.1.4.tgz";
        sha512 = "r5p9sxJjYnArLjObpjA4xu5EKI3CuKHkJXMhT7kwbpUyIFD1n5PMAsoPvWnvtZiNz7LjkYDRZhd7FlI0eMijEA==";
      };
    };
    "is-date-object-1.0.1" = {
      name = "is-date-object";
      packageName = "is-date-object";
      version = "1.0.1";
      src = fetchurl {
        url = "https://registry.npmjs.org/is-date-object/-/is-date-object-1.0.1.tgz";
        sha1 = "9aa20eb6aeebbff77fbd33e74ca01b33581d3a16";
      };
    };
    "is-function-1.0.1" = {
      name = "is-function";
      packageName = "is-function";
      version = "1.0.1";
      src = fetchurl {
        url = "https://registry.npmjs.org/is-function/-/is-function-1.0.1.tgz";
        sha1 = "12cfb98b65b57dd3d193a3121f5f6e2f437602b5";
      };
    };
    "is-regex-1.0.4" = {
      name = "is-regex";
      packageName = "is-regex";
      version = "1.0.4";
      src = fetchurl {
        url = "https://registry.npmjs.org/is-regex/-/is-regex-1.0.4.tgz";
        sha1 = "5517489b547091b0930e095654ced25ee97e9491";
      };
    };
    "is-symbol-1.0.2" = {
      name = "is-symbol";
      packageName = "is-symbol";
      version = "1.0.2";
      src = fetchurl {
        url = "https://registry.npmjs.org/is-symbol/-/is-symbol-1.0.2.tgz";
        sha512 = "HS8bZ9ox60yCJLH9snBpIwv9pYUAkcuLhSA1oero1UB5y9aiQpRA8y2ex945AOtCZL1lJDeIk3G5LthswI46Lw==";
      };
    };
    "mimic-response-1.0.1" = {
      name = "mimic-response";
      packageName = "mimic-response";
      version = "1.0.1";
      src = fetchurl {
        url = "https://registry.npmjs.org/mimic-response/-/mimic-response-1.0.1.tgz";
        sha512 = "j5EctnkH7amfV/q5Hgmoal1g2QHFJRraOtmx0JpIqkxhBhI/lJSl1nMpQ45hVarwNETOoWEimndZ4QK0RHxuxQ==";
      };
    };
    "min-document-2.19.0" = {
      name = "min-document";
      packageName = "min-document";
      version = "2.19.0";
      src = fetchurl {
        url = "https://registry.npmjs.org/min-document/-/min-document-2.19.0.tgz";
        sha1 = "7bd282e3f5842ed295bb748cdd9f1ffa2c824685";
      };
    };
    "object-assign-4.1.1" = {
      name = "object-assign";
      packageName = "object-assign";
      version = "4.1.1";
      src = fetchurl {
        url = "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz";
        sha1 = "2109adc7965887cfc05cbbd442cac8bfbb360863";
      };
    };
    "object-keys-1.1.1" = {
      name = "object-keys";
      packageName = "object-keys";
      version = "1.1.1";
      src = fetchurl {
        url = "https://registry.npmjs.org/object-keys/-/object-keys-1.1.1.tgz";
        sha512 = "NuAESUOUMrlIXOfHKzD6bpPu3tYt3xvjNdRIQ+FeT0lNb4K8WR70CaDxhuNguS2XG+GjkyMwOzsN5ZktImfhLA==";
      };
    };
    "once-1.4.0" = {
      name = "once";
      packageName = "once";
      version = "1.4.0";
      src = fetchurl {
        url = "https://registry.npmjs.org/once/-/once-1.4.0.tgz";
        sha1 = "583b1aa775961d4b113ac17d9c50baef9dd76bd1";
      };
    };
    "parse-headers-2.0.2" = {
      name = "parse-headers";
      packageName = "parse-headers";
      version = "2.0.2";
      src = fetchurl {
        url = "https://registry.npmjs.org/parse-headers/-/parse-headers-2.0.2.tgz";
        sha512 = "/LypJhzFmyBIDYP9aDVgeyEb5sQfbfY5mnDq4hVhlQ69js87wXfmEI5V3xI6vvXasqebp0oCytYFLxsBVfCzSg==";
      };
    };
    "process-0.5.2" = {
      name = "process";
      packageName = "process";
      version = "0.5.2";
      src = fetchurl {
        url = "https://registry.npmjs.org/process/-/process-0.5.2.tgz";
        sha1 = "1638d8a8e34c2f440a91db95ab9aeb677fc185cf";
      };
    };
    "query-string-5.1.1" = {
      name = "query-string";
      packageName = "query-string";
      version = "5.1.1";
      src = fetchurl {
        url = "https://registry.npmjs.org/query-string/-/query-string-5.1.1.tgz";
        sha512 = "gjWOsm2SoGlgLEdAGt7a6slVOk9mGiXmPFMqrEhLQ68rhQuBnpfs3+EmlvqKyxnCo9/PPlF+9MtY02S1aFg+Jw==";
      };
    };
    "simple-concat-1.0.0" = {
      name = "simple-concat";
      packageName = "simple-concat";
      version = "1.0.0";
      src = fetchurl {
        url = "https://registry.npmjs.org/simple-concat/-/simple-concat-1.0.0.tgz";
        sha1 = "7344cbb8b6e26fb27d66b2fc86f9f6d5997521c6";
      };
    };
    "simple-get-2.8.1" = {
      name = "simple-get";
      packageName = "simple-get";
      version = "2.8.1";
      src = fetchurl {
        url = "https://registry.npmjs.org/simple-get/-/simple-get-2.8.1.tgz";
        sha512 = "lSSHRSw3mQNUGPAYRqo7xy9dhKmxFXIjLjp4KHpf99GEH2VH7C3AM+Qfx6du6jhfUi6Vm7XnbEVEf7Wb6N8jRw==";
      };
    };
    "strict-uri-encode-1.1.0" = {
      name = "strict-uri-encode";
      packageName = "strict-uri-encode";
      version = "1.1.0";
      src = fetchurl {
        url = "https://registry.npmjs.org/strict-uri-encode/-/strict-uri-encode-1.1.0.tgz";
        sha1 = "279b225df1d582b1f54e65addd4352e18faa0713";
      };
    };
    "string.prototype.trim-1.2.0" = {
      name = "string.prototype.trim";
      packageName = "string.prototype.trim";
      version = "1.2.0";
      src = fetchurl {
        url = "https://registry.npmjs.org/string.prototype.trim/-/string.prototype.trim-1.2.0.tgz";
        sha512 = "9EIjYD/WdlvLpn987+ctkLf0FfvBefOCuiEr2henD8X+7jfwPnyvTdmW8OJhj5p+M0/96mBdynLWkxUr+rHlpg==";
      };
    };
    "timed-out-4.0.1" = {
      name = "timed-out";
      packageName = "timed-out";
      version = "4.0.1";
      src = fetchurl {
        url = "https://registry.npmjs.org/timed-out/-/timed-out-4.0.1.tgz";
        sha1 = "f32eacac5a175bea25d7fab565ab3ed8741ef56f";
      };
    };
    "url-set-query-1.0.0" = {
      name = "url-set-query";
      packageName = "url-set-query";
      version = "1.0.0";
      src = fetchurl {
        url = "https://registry.npmjs.org/url-set-query/-/url-set-query-1.0.0.tgz";
        sha1 = "016e8cfd7c20ee05cafe7795e892bd0702faa339";
      };
    };
    "wrappy-1.0.2" = {
      name = "wrappy";
      packageName = "wrappy";
      version = "1.0.2";
      src = fetchurl {
        url = "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz";
        sha1 = "b5243d8f3ec1aa35f1364605bc0d1036e30ab69f";
      };
    };
    "xhr-2.5.0" = {
      name = "xhr";
      packageName = "xhr";
      version = "2.5.0";
      src = fetchurl {
        url = "https://registry.npmjs.org/xhr/-/xhr-2.5.0.tgz";
        sha512 = "4nlO/14t3BNUZRXIXfXe+3N6w3s1KoxcJUUURctd64BLRe67E4gRwp4PjywtDY72fXpZ1y6Ch0VZQRY/gMPzzQ==";
      };
    };
    "xhr-request-1.1.0" = {
      name = "xhr-request";
      packageName = "xhr-request";
      version = "1.1.0";
      src = fetchurl {
        url = "https://registry.npmjs.org/xhr-request/-/xhr-request-1.1.0.tgz";
        sha512 = "Y7qzEaR3FDtL3fP30k9wO/e+FBnBByZeybKOhASsGP30NIkRAAkKD/sCnLvgEfAIEC1rcmK7YG8f4oEnIrrWzA==";
      };
    };
    "xhr-request-promise-0.1.2" = {
      name = "xhr-request-promise";
      packageName = "xhr-request-promise";
      version = "0.1.2";
      src = fetchurl {
        url = "https://registry.npmjs.org/xhr-request-promise/-/xhr-request-promise-0.1.2.tgz";
        sha1 = "343c44d1ee7726b8648069682d0f840c83b4261d";
      };
    };
    "xtend-4.0.2" = {
      name = "xtend";
      packageName = "xtend";
      version = "4.0.2";
      src = fetchurl {
        url = "https://registry.npmjs.org/xtend/-/xtend-4.0.2.tgz";
        sha512 = "LKYU1iAXJXUgAXn9URjiu+MWhyUXHsvfp7mcuYm9dSUKK0/CjtrUwFAxD82/mCWbtLsGjFIad0wIsod4zrTAEQ==";
      };
    };
  };
in
{
  formality-lang = nodeEnv.buildNodePackage {
    name = "formality-lang";
    packageName = "formality-lang";
    version = "0.3.47";
    src = fetchurl {
      url = "https://registry.npmjs.org/formality-lang/-/formality-lang-0.3.47.tgz";
      sha512 = "ExU+dRFXB4Wvvl/XRVWc6PEmi04BeY0/b6ehpJArlMEmd8xlhwIyx85Ty0IEuuyB9A9kNKu+MOVsssUiRrjwdw==";
    };
    dependencies = [
      sources."buffer-to-arraybuffer-0.0.5"
      sources."decode-uri-component-0.2.0"
      sources."decompress-response-3.3.0"
      sources."define-properties-1.1.3"
      sources."dom-walk-0.1.1"
      sources."es-abstract-1.13.0"
      sources."es-to-primitive-1.2.0"
      sources."for-each-0.3.3"
      sources."formality-net-0.1.10"
      sources."function-bind-1.1.1"
      sources."global-4.3.2"
      sources."has-1.0.3"
      sources."has-symbols-1.0.0"
      sources."is-callable-1.1.4"
      sources."is-date-object-1.0.1"
      sources."is-function-1.0.1"
      sources."is-regex-1.0.4"
      sources."is-symbol-1.0.2"
      sources."mimic-response-1.0.1"
      sources."min-document-2.19.0"
      sources."object-assign-4.1.1"
      sources."object-keys-1.1.1"
      sources."once-1.4.0"
      sources."parse-headers-2.0.2"
      sources."process-0.5.2"
      sources."query-string-5.1.1"
      sources."simple-concat-1.0.0"
      sources."simple-get-2.8.1"
      sources."strict-uri-encode-1.1.0"
      sources."string.prototype.trim-1.2.0"
      sources."timed-out-4.0.1"
      sources."url-set-query-1.0.0"
      sources."wrappy-1.0.2"
      sources."xhr-2.5.0"
      sources."xhr-request-1.1.0"
      sources."xhr-request-promise-0.1.2"
      sources."xtend-4.0.2"
    ];
    buildInputs = globalBuildInputs;
    meta = {
      description = "";
      homepage = "https://github.com/moonad/formality-core#readme";
      license = "MIT";
    };
    production = true;
    bypassCache = true;
    reconstructLock = true;
  };
  formality-core = nodeEnv.buildNodePackage {
    name = "formality-core";
    packageName = "formality-core";
    version = "0.1.47";
    src = fetchurl {
      url = "https://registry.npmjs.org/formality-core/-/formality-core-0.1.47.tgz";
      sha512 = "PL2WVETDlZRs1ETuOTZO8aXi214yF8BPaClOu30uyEuPJJmLV/DYegz5mDmPHvxc7Cfh7rXnuqOs3r+iAN1Pgg==";
    };
    dependencies = [
      sources."formality-net-0.1.10"
    ];
    buildInputs = globalBuildInputs;
    meta = {
      description = "";
      homepage = "https://github.com/moonad/formality-core#readme";
      license = "MIT";
    };
    production = true;
    bypassCache = true;
    reconstructLock = true;
  };
  formality-net = nodeEnv.buildNodePackage {
    name = "formality-net";
    packageName = "formality-net";
    version = "0.1.10";
    src = fetchurl {
      url = "https://registry.npmjs.org/formality-net/-/formality-net-0.1.10.tgz";
      sha512 = "/AoLMx58KUEIVr1c9Crdio8JpEofhNyI7VjONNT/EGxB3ST64n3yehXvMusUZjMBe/5fg0edXzWGAzRhGuJfzA==";
    };
    buildInputs = globalBuildInputs;
    meta = {
      description = "";
      homepage = "https://github.com/moonad/formality-net#readme";
      license = "MIT";
    };
    production = true;
    bypassCache = true;
    reconstructLock = true;
  };
  elementary-affine-net = nodeEnv.buildNodePackage {
    name = "elementary-affine-net";
    packageName = "elementary-affine-net";
    version = "0.1.0";
    src = fetchurl {
      url = "https://registry.npmjs.org/elementary-affine-net/-/elementary-affine-net-0.1.0.tgz";
      sha512 = "Scojo5it42a0WeoxqPXON1QtxL4jgvRWNtlCTpjaL8Tn7DSDmjtuJw7itIRfghVsN9vkqhzn6jdUwY/UCqhf3w==";
    };
    buildInputs = globalBuildInputs;
    meta = {
      description = "";
      homepage = "https://github.com/moonad/elementary-affine-net#readme";
      license = "MIT";
    };
    production = true;
    bypassCache = true;
    reconstructLock = true;
  };
  elementary-affine-core = nodeEnv.buildNodePackage {
    name = "elementary-affine-core";
    packageName = "elementary-affine-core";
    version = "0.1.0";
    src = fetchurl {
      url = "https://registry.npmjs.org/elementary-affine-core/-/elementary-affine-core-0.1.0.tgz";
      sha512 = "5nemEZ6wzDJte3rwRyyS8TyFjOmIEgxgF3BRjfCyrGUVCXA9AU3Y++CkMJcc7Apsb2A1svRryjLoqt2zv/dUDQ==";
    };
    dependencies = [
      sources."elementary-affine-net-0.1.0"
    ];
    buildInputs = globalBuildInputs;
    meta = {
      description = "";
      homepage = "https://github.com/moonad/elementary-affine-core#readme";
      license = "MIT";
    };
    production = true;
    bypassCache = true;
    reconstructLock = true;
  };
  elementary-affine-type-theory = nodeEnv.buildNodePackage {
    name = "elementary-affine-type-theory";
    packageName = "elementary-affine-type-theory";
    version = "0.1.2";
    src = fetchurl {
      url = "https://registry.npmjs.org/elementary-affine-type-theory/-/elementary-affine-type-theory-0.1.2.tgz";
      sha512 = "RK+Cv4ch04viP5sjLraE2SiWQn1Uv15ELWvD+S+B60iQ4YKEw0dBNh71OhSSvAm6c4/xwlxB2I8lcf3q5ynW3w==";
    };
    dependencies = [
      sources."elementary-affine-core-0.1.0"
      sources."elementary-affine-net-0.1.0"
    ];
    buildInputs = globalBuildInputs;
    meta = {
      description = "Minimal proof language.";
      homepage = "https://github.com/moonad/elementary-affine-type-theory#readme";
      license = "MIT";
    };
    production = true;
    bypassCache = true;
    reconstructLock = true;
  };
}