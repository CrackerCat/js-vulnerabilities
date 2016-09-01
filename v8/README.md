# V8

* CVE-2013-2838: OOB read by Christian Holler
* CVE-2013-6632: TypedArray, Integer Overflow, OOB by Pinkie Pie
* CVE-2013-6638: BOF by Jakob Kummerrow, fixed in v8 version 3.22.24.7
* CVE-2013-6639: OOB write by Jakob Kummerow, fixed in v8 version 3.22.24.7
* CVE-2013-6640: OOB read by Jakob Kummerow, fixed in v8 version 3.22.24.7
* CVE-2013-6650: Memorry corruption by Christian Holler
* CVE-2014-1705: TypedArray, Invalid Array length, OOB by geohot
* CVE-2014-1721: Memory corruption, Chrisstian Holler
* CVE-2014-1729: fixed in v8 version 3.24.35.22
* CVE-2014-1749: Integer underflow, fixed in v8 version 3.25.28.16
* CVE-2014-3167: Unknown type of crash
* CVE-2014-3176: Array concat, Side effect, OOB by lokihardt
* CVE-2014-3200: V8 slow/fast properties confusion
* CVE-2014-7927: asm.js, Compiler, OOB by Christian Holler
* CVE-2014-7928: Array, Optimization by Christian Holler
* CVE-2015-1242: Type confusion by fcole@onshape.com
* CVE-2015-6764: JSON, Side effect, OOB, Pwn2Own by Guang Gon of Qihoo
* CVE-2015-6771: TypedArray, OOB
* CVE-2015-8584: JSON, OOB
* CVE-2016-1646: OOB read by Wen Xu from Tencent KeenLab
* CVE-2016-1653: OOB write by Choongwoo Han
* CVE-2016-1665: Information leak by HyungSeok Han
* CVE-2016-1669: BOF by Choongwoo Han
* CVE-2016-1677: Type confusion by Guang Cong of Qihoo
* CVE-2016-1688: OOB by Max Korenko

# How to build old version v8
* Install depot\_tools: http://dev.chromium.org/developers/how-tos/install-depot-tools
* Fetch v8
* Find appropriate v8 version and get tagname or hashval
* git checkout [tagname | hashval]
* gclient sync --with\_branch\_heads --jobs 'n'
  * gyp problem with svn, git clone https://github.com/svn2github/gyp build/gyp
  * gmock problem with svn, git clone https://github.com/google/googlemock testing/gtest
* make
  * -j n
  * werror=no
  * asan=on
  * ...

