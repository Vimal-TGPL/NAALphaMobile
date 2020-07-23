export class User { 
    FirstName: string;
    LastName: string;
    Username: string;
    Password: string;
    InvestorType: string;
    Email: string;
    IsPolicyAccepted: string;
    Token: string;
    Company: string;
}

export class UserPass {
    
    FirstName: string;
    LastName: string;
    Username: string;
    Password: string;
    InvestorType: string;
    Email: string;
    IsPolicyAccepted: string;
    Token: string;
    Company: string;
}

export class UserView {
    firstName: string;
    lastName: string;
    username: string; 
    investorType: string; 
    isEmailVerified: string;
    viewHelp: string;
    token: string;
}

export class UserTrack {
    TrackingId: number;
    Userid: number;
    RequestedUrl: string;
    LogInTime: Date;
    LogOutTime: Date;
    RememberToken: string;
    IPAddress: string;
    Status: string;
  }

export class UserTrackDtls {
    TrackingId: number;
    Userid: number;
    UserAgent: string;
    OS: string;
    browser: string;
    device: string;
    OSVersion: string;
    browserVersion: string;
    IsMobile: number;
    IsTablet: number;
    IsDesktopDevice: number;
    ScreenPixelsHeight: number;
    ScreenPixelsWidth: number;
    touchScreen: boolean;
  }