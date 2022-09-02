package com.booking.dh.security.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter

public class AuthenticationRequest {
    private String email;
    private String password;
}
