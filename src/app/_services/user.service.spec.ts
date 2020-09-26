import { UserService, TokenService } from '../_services/index';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserProfileKeysView } from '../_models/userprofile';
import { RouterModule } from '@angular/router';

describe('UserService', () => {
    let httpMock: HttpTestingController;
    let userService: UserService;
    let tokenService: TokenService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule,
                RouterModule.forRoot([])
            ],
            providers: [UserService]
        });
        httpMock = TestBed.inject(HttpTestingController);
        userService = TestBed.inject(UserService);
        tokenService = TestBed.inject(TokenService);

        const mockLocalStorage = {
            // supposed to return a string of JSON
            getItem: (key: string): string | null => {
                if (key === "currentUser") {
                    return JSON.stringify({ "access_token": "sometoken" });
                }
                else {
                    return null;
                }
            }
        };
        spyOn(localStorage, 'getItem')
            .and.callFake(mockLocalStorage.getItem);
    })
    afterEach(() => {
        httpMock.verify();
    })
    it('should be created', () => {
        expect(userService).toBeTruthy();
    });
    it('should pass getAPIKeys()', () => {
        let storeId = 1;
        const mockProfile: UserProfileKeysView = {
            id: 1,
            userID: "",
            storeID: storeId,
            appID: "",
            certID: "",
            devID: "",
            APIEmail: "",
            token: ""
        }
        let profileResponse: UserProfileKeysView;

        // let user = {
        //     access_token: "86399"
        // }
        // tokenService.setAccessToken(JSON.stringify(user));
        
        userService.getAPIKeys(1).subscribe(
            (response: UserProfileKeysView) => {
                profileResponse = response;
                expect(profileResponse).toEqual(mockProfile);
            });

        const req = httpMock.expectOne('http://localhost:51721/getuserprofilekeys?storeID=' + storeId);
        expect(req.request.method).toBe('GET');
        req.flush(mockProfile);
    })
})