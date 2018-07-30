module.exports = {
  token:"dafifo",
  appID:"wx2b8ef700f38b5695",
  appScrect:"dd66ebc1af1b28a7dde9e2b9dfc63c56",
  domain:"https://api.weixin.qq.com/",
  apiURL:{
        "accessTokenApi":"%scgi-bin/token?grant_type=client_credential&appid=%s&secret=%s",
        "createMenu":"%scgi-bin/menu/create?access_token=%s"
    }
}
