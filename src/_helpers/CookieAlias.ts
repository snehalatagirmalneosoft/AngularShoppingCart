import { Injectable} from '@angular/core';

@Injectable()
export class CookieAlias {
    userData:string="user_data";
    accessToken:string="access_token";
    apiUrls:string="api_urls";
}

@Injectable()
export class UserRoles
{
    Admin: number = 1;
    Vendor: number = 2;
    Customer: number = 3;
}