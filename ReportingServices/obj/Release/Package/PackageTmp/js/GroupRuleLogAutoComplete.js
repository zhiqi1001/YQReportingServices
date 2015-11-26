﻿var texts = [
{ name: "PH计检修", value: "PH计检修" },
{ name: "PH计定期冲洗", value: "PH计定期冲洗" },
{ name: "排出泵检修", value: "排出泵检修" },
{ name: "石膏排出泵出口母管检修", value: "石膏排出泵出口母管检修" },
{ name: "密度计检修", value: "密度计检修" }
];


$(function () {
    var sial = setInterval(function () {
        if ($("#add_Jqgrid1_top").length > 0) {
            clearInterval(sial);
            $("#add_Jqgrid1_top").click(function () {
                $("#alarmdis").autocomplete(texts, {
                    minChars: 0,//自动完成激活之前填入的最小字符
                    max: 12,//列表条目数
                    width: 400,//提示的宽度
                    scrollHeight: 300,//提示的高度
                    matchContains: true,//是否只要包含文本框里的就可以
                    autoFill: false,//自动填充
                    formatItem: function (data, i, max) {//格式化列表中的条目 row:条目对象,i:当前条目数,max:总条目数
                        return data.name;//i + '/' + max + ':"' + data.name + '"[' + data.value + ']';
                    },
                    formatMatch: function (data, i, max) {//配合formatItem使用，作用在于，由于使用了formatItem，所以条目中的内容有所改变，而我们要匹配的是原始的数据，所以用formatMatch做一个调整，使之匹配原始数据
                        return data.name + data.value;
                    },
                    formatResult: function (data) {//定义最终返回的数据，比如我们还是要返回原始数据，而不是formatItem过的数据
                        return data.value;
                    }
                });
            })
        }
    }, 1000)
})