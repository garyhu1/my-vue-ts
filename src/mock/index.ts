import Mock from 'mockjs';

Mock.mock("/user","get",{
    'items|1-10': [
        {
            "name|+1": [
                "Juddy",
                "Tommy",
                "Hallen"
            ]
        }
    ]
})