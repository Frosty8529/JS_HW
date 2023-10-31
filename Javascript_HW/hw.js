console.log("-----1.1-----");
const draw1 = function(n) {
    let text = '';
    for (let i = 0; i < n; i++) {
        text += "*";
    }
    console.log(text);
}
draw1(2);
draw1(3);
draw1(4);

console.log("-----1.2-----");
const draw2 = function(n) {
    let text = '';
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            text += "*";
        }
        text += "\n";
    }
    console.log(text);
}
draw2(2);
draw2(3);
draw2(4);

console.log("-----1.3-----");
const draw3 = function(n) {
    let text = '';
    for (let i = 0; i < n; i++) {
        for (let j = 1; j < n+1; j++) {
            text += j;
        }
        text += "\n";
    }
    console.log(text);
}
draw3(2);
draw3(3);
draw3(4);

console.log("-----1.4-----");
const draw4 = function(n) {
    let text = '';
    for (let i = 1; i < n+1; i++) {
        for (let j = 0; j < n; j++) {
            text += i;
        }
        text += "\n";
    }
    console.log(text);
}
draw4(2);
draw4(3);
draw4(4);

console.log("-----1.5-----");
const draw5 = function(n) {
    let text = '';
    for (let i = n; i > 0; i--) {
        for (let j = 0; j < n; j++) {
            text += i;
        }
        text += "\n";
    }
    console.log(text);
}
draw5(2);
draw5(3);
draw5(4);

console.log("-----1.6-----");
const draw6 = function(n) {
    let text = '', num = 1;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            text += num;
            num++;
        }
        text += "\n";
    }
    console.log(text);
}
draw6(2);
draw6(3);
draw6(4);

console.log("-----1.7-----");
const draw7 = function(n) {
    let text = '', num = n * n;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            text += num;
            num--;
        }
        text += "\n";
    }
    console.log(text);
}
draw7(2);
draw7(3);
draw7(4);

console.log("-----1.8-----");
const draw8 = function(n) {
    let text = '', num = 0;
    for (let i = 0; i < n; i++) {
        text += num;
        num += 2;
        text += "\n";
    }
    console.log(text);
}
draw8(2);
draw8(3);
draw8(4);

console.log("-----1.9-----");
const draw9 = function(n) {
    let text = '', num = 2;
    for (let i = 0; i < n; i++) {
        text += num;
        num += 2;
        text += "\n";
    }
    console.log(text);
}
draw9(2);
draw9(3);
draw9(4);

console.log("-----1.10-----");
const draw10 = function(n) {
    let text = '', num = 1;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            text += num;
            num += i + 1;
        }
        num = i + 2;
        text += "\n";
    }
    console.log(text);
}
draw10(2);
draw10(3);
draw10(4);

console.log("-----1.11-----");
const draw11 = function(n) {
    let text = '';
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i == j) {
                text += "_";
            } else {
                text += "*";
            }
        }
        text += "\n";
    }
    console.log(text);
}
draw11(2);
draw11(3);
draw11(4);

console.log("-----1.12-----");
const draw12 = function(n) {
    let text = '';
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i + j  == n - 1) {
                text += "_";
            } else {
                text += "*";
            }
        }
        text += "\n";
    }
    console.log(text);
}
draw12(2);
draw12(3);
draw12(4);

console.log("-----2.1-----");
const draw21 = function(n) {
    let text = '';
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (j > i) {
                text += "_";
            } else {
                text += "*";
            }
        }
        text += "\n";
    }
    console.log(text);
}
draw21(2);
draw21(3);
draw21(4);

console.log("-----2.2-----");
const draw22 = function(n) {
    let text = '';
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i + j >= n) {
                text += "_";
            } else {
                text += "*";
            }
        }
        text += "\n";
    }
    console.log(text);
}
draw22(2);
draw22(3);
draw22(4);

console.log("-----2.3-----");
const draw23 = function(n) {
    let text = '';
    for (let i = 0; i < 2 * n - 1; i++) {
        for (let j = 0; j < n; j++) {
            if (i < (2 * n - 1) / 2 && i < j) {
                text += "_";
            } else if (i > (2 * n - 1) / 2 && i + j >= 2 * n - 1) {
                text += "_";
            } else {
                text += "*";
            }
        }
        text += "\n";
    }
    console.log(text);
}
draw23(2);
draw23(3);
draw23(4);

console.log("-----2.4-----");
const draw24 = function(n) {
    let text = '', num = 1;
    for (let i = 0; i < 2 * n - 1; i++) {
        for (let j = 0; j < n; j++) {
            if (i < (2 * n - 1) / 2 && i < j) {
                text += "-";
            } else if (i > (2 * n - 1) / 2 && i + j >= 2 * n - 1) {
                text += "-";
            } else {
                text += num;
            }
        }
        if (i < (2 * n - 1) / 2 - 0.5) {
            num++;
        } else if (i > (2 * n - 1) / 2 - 0.5) {
            num--;
        }
        text += "\n";
    }
    console.log(text);
}
draw24(2);
draw24(3);
draw24(4);

console.log("-----2.5-----");
const draw25 = function(n) {
    let text = '';
    for (let i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {
            if (i + j < n - 1) {
                text += "_";
            } else {
                text += "*";
            }
        }
        text += "\n";
    }
    console.log(text);
}
draw25(2);
draw25(3);
draw25(4);

console.log("-----2.6-----");
const draw26 = function(n) {
    let text = '';
    for (let i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {
            if (i > j) {
                text += "_";
            } else {
                text += "*";
            }
        }
        text += "\n";
    }
    console.log(text);
}
draw26(2);
draw26(3);
draw26(4);

console.log("-----2.7-----");
const draw27 = function(n) {
    let text = '';
    for (let i = 0; i < 2 * n - 1; i++) {
        for (j = 0; j < n; j++) {
            if (i < (2 * n - 1) / 2 - 0.5 && i + j < n - 1) {
                text += "_";
            } else if (i > (2 * n - 1) / 2 - 0.5 && i -j >= n) {
                text += "_";
            } else {
                text += "*";
            }
        }
        text += "\n";
    }
    console.log(text);
}
draw27(2);
draw27(3);
draw27(4);

console.log("-----2.8-----");
const draw28 = function(n) {
    let text = '', num = 1;
    for (let i = 0; i < 2 * n - 1; i++) {
        for (j = 0; j < n; j++) {
            if (i < (2 * n - 1) / 2 - 0.5 && i + j < n - 1) {
                text += "_";
            } else if (i > (2 * n - 1) / 2 - 0.5 && i -j >= n) {
                text += "_";
            } else {
                text += num;
                num++;
            }
        }
        text += "\n";
    }
    console.log(text);
}
draw28(2);
draw28(3);
draw28(4);

console.log("-----2.9-----");
const draw29 = function(n) {
    let text = '';
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < 2 * n - 1; j++) {
            if (i + j < n - 1 || j - i >= n) {
                text += "_";
            } else {
                text += "*";
            }
        }
        text += "\n";
    }
    console.log(text);
}
draw29(2);
draw29(3);
draw29(4);

console.log("-----2.10-----");
const draw210 = function(n) {
    let text = '';
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < 2 * n - 1; j++) {
            if (i > j || i + j >= 2 * n - 1) {
                text += "_";
            } else {
                text += "*";
            }
        }
        text += "\n";
    }
    console.log(text);
}
draw210(2);
draw210(3);
draw210(4);

console.log("-----3.1-----");
const draw31 = function(n) {
    let text = '';
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < 2 * n - 1; j++) {
            if (i + j < n - 1 || j - i >= n) {
                text += "_";
            } else {
                text += "*";
            }
        }
        text += "\n";
    }
    for (let k = 0; k < n; k++) {
        for (let l = 0; l < 2 * n - 1; l++) {
            if (k > l || k + l >= 2 * n - 1) {
                text += "_";
            } else {
                text += "*";
            }
        }
        text += "\n";
    }
    console.log(text);
}
draw31(2);
draw31(3);
draw31(4);

console.log("-----3.2-----");
const draw32 = function(n) {
    let text = '', num = 1;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < 2 * n - 1; j++) {
            if (i + j < n - 1 || j - i >= n) {
                text += "-";
            } else {
                text += num;
                num++;
            }
        }
        text += "\n";
    }
    for (let k = 0; k < n; k++) {
        for (let l = 0; l < 2 * n - 1; l++) {
            if (k > l || k + l >= 2 * n - 1) {
                text += "-";
            } else {
                text += num;
                num++;
            }
        }
        text += "\n";
    }
    console.log(text);
}
draw32(2);
draw32(3);
draw32(4);

console.log("-----3.3-----");
const draw33 = function(n) {
    let text = [];
    for (let i = 0; i < n; i++) {
        text[i] = []; // Initialize row
        for (let j = 0; j < n; j++) {
            if (j > i) {
                text[i][j] = "_";
            } else {
                text[i][j] = "*";
            }
        }
    }
    console.log(text);
}
draw33(2);
draw33(3);
draw33(4);

console.log("-----3.4-----");
const draw34 = function(n) {
    let text = [], x = 2 * n - 1, count = n;
    for (let i = 0; i < x; i++) {
        text[i] = [];
        for (let j = 0; j < x; j++) {
            if (i < x / 2 - 0.5) {
                if (i + j < n - 1 || j - i >= n) {
                    text[i][j] = "_";
                } else {
                    text[i][j] = "*";
                }
            } else if (i > x / 2 - 0.5) {
                if (i + j >= 3 * n - 2|| i - j >= n) {
                    text[i][j] = "_";
                } else {
                    text[i][j] = "*";
                }
            } else {
                text[i][j] = "*";
            }
        }
    }
    console.log(text);
}
draw34(2);
draw34(3);
draw34(4);