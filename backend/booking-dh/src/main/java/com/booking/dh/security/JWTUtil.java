package com.booking.dh.security;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Calendar;
import java.util.Date;

public class JWTUtil {

    private static final String KEY = "mG9\\n2,^obBu[8n.~MpVzbB5tHnuYF<KRE/LnQrQ<q@]wQP46vo^x{3vEN?3uN/E";

    public String generateToken(UserDetails userDetails) {
        return Jwts.builder().setSubject(userDetails.getUsername()).setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 10))
                .signWith(SignatureAlgorithm.HS256, KEY).compact();
    }

}
