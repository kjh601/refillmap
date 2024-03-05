package toyproject.refillmap.controller.form;

import org.springframework.web.bind.annotation.GetMapping;

@org.springframework.stereotype.Controller
public class Controller {

    @GetMapping("/edit-profile")
    public String getEditProfile() {
        return "/fragment/section/edit-profile";
    }

    @GetMapping("/faq")
    public String getFaq() {
        return "/fragment/section/faq";
    }

    @GetMapping("/inquire")
    public String getInquire() {
        return "/fragment/section/inquire";
    }

    @GetMapping("/login")
    public String getLogin() {
        return "/fragment/section/login";
    }

    @GetMapping("/mypage")
    public String getMypage() {
        return "/fragment/section/mypage";
    }

    @GetMapping("/myquestion")
    public String getMyquestion() {
        return "/fragment/section/myquestion";
    }

    @GetMapping("/privacy-policy")
    public String getPrivacyPolicy() {
        return "/fragment/section/privacy-policy";
    }

}