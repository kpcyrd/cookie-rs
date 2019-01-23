var N=null,E="",T="t",U="u",searchIndex={};
var r_Aa="into_iter",r_Ba="to_string",r_Ca="string",r_Da="parseerror",r_Ea="cookiejar",r_Fa="clone",r_Ga="formatter",r_Ha="fmt",r_Ia="ParseError",r_Ja="SameSite",r_Ka="CookieBuilder",r_La="CookieJar",r_Ma="Cookie",r_Na="Delta",r_aa="cookie",r_ba="cookiebuilder",r_ca="self",r_da="delta",r_ea="bool",r_fa="http_only",r_ga="option",r_ha="secure",r_ia="same_site",r_ja="samesite",r_ka="max_age",r_la="duration",r_ma="domain",r_na="str",r_oa="expires",r_pa="result",r_qa="to_owned",r_ra="clone_into",r_sa="try_from",r_ta="borrow",r_ua="get_type_id",r_va="typeid",r_wa="try_into",r_xa="borrow_mut",r_ya="from",r_za="into";

searchIndex[r_aa]={"doc":"HTTP cookie parsing and cookie jar management.","i":[[3,r_Ka,r_aa,"Structure that follows the builder pattern for building…",N,N],[3,r_La,E,"A collection of cookies that tracks its modifications.",N,N],[3,r_Na,E,"Iterator over the changes to a cookie jar.",N,N],[3,"Iter",E,"Iterator over all of the cookies in a jar.",N,N],[3,r_Ma,E,"Representation of an HTTP cookie.",N,N],[4,r_Ia,E,"Enum corresponding to a parsing error.",N,N],[13,"MissingPair",E,"The cookie did not contain a name/value pair.",0,N],[13,"EmptyName",E,"The cookie's name was empty.",0,N],[13,"Utf8Error",E,"Decoding the cookie's name or value resulted in invalid…",0,N],[4,r_Ja,E,"The `SameSite` cookie attribute.",N,N],[13,"Strict",E,"The \"Strict\" `SameSite` attribute.",1,N],[13,"Lax",E,"The \"Lax\" `SameSite` attribute.",1,N],[13,"None",E,"No `SameSite` attribute.",1,N],[11,"new",E,"Creates a new `CookieBuilder` instance from the given name…",2,[[["n"],["v"]],[r_ba]]],[11,r_oa,E,"Sets the `expires` field in the cookie being built.",2,[[[r_ca],["tm"]],[r_ba]]],[11,r_ka,E,"Sets the `max_age` field in the cookie being built.",2,[[[r_ca],[r_la]],[r_ba]]],[11,r_ma,E,"Sets the `domain` field in the cookie being built.",2,[[[r_ca],["d"]],[r_ba]]],[11,"path",E,"Sets the `path` field in the cookie being built.",2,[[[r_ca],["p"]],[r_ba]]],[11,r_ha,E,"Sets the `secure` field in the cookie being built.",2,[[[r_ca],[r_ea]],[r_ba]]],[11,r_fa,E,"Sets the `http_only` field in the cookie being built.",2,[[[r_ca],[r_ea]],[r_ba]]],[11,r_ia,E,"Sets the `same_site` field in the cookie being built.",2,[[[r_ca],[r_ja]],[r_ba]]],[11,"permanent",E,"Makes the cookie being built 'permanent' by extending its…",2,[[[r_ca]],[r_ba]]],[11,"finish",E,"Finishes building and returns the built `Cookie`.",2,[[[r_ca]],[r_aa]]],[11,"as_str",E,"Returns a description of this error as a string",0,[[[r_ca]],[r_na]]],[11,"new",E,"Creates an empty cookie jar.",3,[[],[r_Ea]]],[11,"get",E,"Returns a reference to the `Cookie` inside this jar with…",3,[[[r_ca],[r_na]],[r_ga,[r_aa]]]],[11,"add_original",E,"Adds an \"original\" `cookie` to this jar. If an original…",3,[[[r_ca],[r_aa]]]],[11,"add",E,"Adds `cookie` to this jar. If a cookie with the same name…",3,[[[r_ca],[r_aa]]]],[11,"remove",E,"Removes `cookie` from this jar. If an original cookie with…",3,[[[r_ca],[r_aa]]]],[11,"force_remove",E,"Removes `cookie` from this jar completely. This method…",3,[[[r_ca],[r_aa]]]],[11,"clear",E,"Removes all cookies from this cookie jar.",3,[[[r_ca]]]],[11,r_da,E,"Returns an iterator over cookies that represent the…",3,[[[r_ca]],[r_da]]],[11,"iter",E,"Returns an iterator over all of the cookies present in…",3,[[[r_ca]],["iter"]]],[11,"is_strict",E,"Returns `true` if `self` is `SameSite::Strict` and `false`…",1,[[[r_ca]],[r_ea]]],[11,"is_lax",E,"Returns `true` if `self` is `SameSite::Lax` and `false`…",1,[[[r_ca]],[r_ea]]],[11,"is_none",E,"Returns `true` if `self` is `SameSite::None` and `false`…",1,[[[r_ca]],[r_ea]]],[11,"new",E,"Creates a new `Cookie` with the given name and value.",4,[[["n"],["v"]],[r_aa]]],[11,"named",E,"Creates a new `Cookie` with the given name and an empty…",4,[[["n"]],[r_aa]]],[11,"build",E,"Creates a new `CookieBuilder` instance from the given key…",4,[[["n"],["v"]],[r_ba]]],[11,"parse",E,"Parses a `Cookie` from the given HTTP cookie header value…",4,[[["s"]],[r_pa,[r_aa,r_Da]]]],[11,"into_owned",E,"Converts `self` into a `Cookie` with a static lifetime.…",4,[[[r_ca]],[r_aa]]],[11,"name",E,"Returns the name of `self`.",4,[[[r_ca]],[r_na]]],[11,"value",E,"Returns the value of `self`.",4,[[[r_ca]],[r_na]]],[11,"name_value",E,"Returns the name and value of `self` as a tuple of `(name,…",4,N],[11,r_fa,E,"Returns whether this cookie was marked `HttpOnly` or not.…",4,[[[r_ca]],[r_ga,[r_ea]]]],[11,r_ha,E,"Returns whether this cookie was marked `Secure` or not.…",4,[[[r_ca]],[r_ga,[r_ea]]]],[11,r_ia,E,"Returns the `SameSite` attribute of this cookie if one was…",4,[[[r_ca]],[r_ga,[r_ja]]]],[11,r_ka,E,"Returns the specified max-age of the cookie if one was…",4,[[[r_ca]],[r_ga,[r_la]]]],[11,"path",E,"Returns the `Path` of the cookie if one was specified.",4,[[[r_ca]],[r_ga,[r_na]]]],[11,r_ma,E,"Returns the `Domain` of the cookie if one was specified.",4,[[[r_ca]],[r_ga,[r_na]]]],[11,r_oa,E,"Returns the `Expires` time of the cookie if one was…",4,[[[r_ca]],[r_ga,["tm"]]]],[11,"set_name",E,"Sets the name of `self` to `name`.",4,[[[r_ca],["n"]]]],[11,"set_value",E,"Sets the value of `self` to `value`.",4,[[[r_ca],["v"]]]],[11,"set_http_only",E,"Sets the value of `http_only` in `self` to `value`.",4,[[[r_ca],[r_ea]]]],[11,"set_secure",E,"Sets the value of `secure` in `self` to `value`.",4,[[[r_ca],[r_ea]]]],[11,"set_same_site",E,"Sets the value of `same_site` in `self` to `value`.",4,[[[r_ca],[r_ja]]]],[11,"set_max_age",E,"Sets the value of `max_age` in `self` to `value`.",4,[[[r_ca],[r_la]]]],[11,"set_path",E,"Sets the `path` of `self` to `path`.",4,[[[r_ca],["p"]]]],[11,"set_domain",E,"Sets the `domain` of `self` to `domain`.",4,[[[r_ca],["d"]]]],[11,"set_expires",E,"Sets the expires field of `self` to `time`.",4,[[[r_ca],["tm"]]]],[11,"make_permanent",E,"Makes `self` a \"permanent\" cookie by extending its…",4,[[[r_ca]]]],[11,"name_raw",E,"Returns the name of `self` as a string slice of the raw…",4,[[[r_ca]],[r_ga,[r_na]]]],[11,"value_raw",E,"Returns the value of `self` as a string slice of the raw…",4,[[[r_ca]],[r_ga,[r_na]]]],[11,"path_raw",E,"Returns the `Path` of `self` as a string slice of the raw…",4,[[[r_ca]],[r_ga,[r_na]]]],[11,"domain_raw",E,"Returns the `Domain` of `self` as a string slice of the…",4,[[[r_ca]],[r_ga,[r_na]]]],[11,r_ya,E,E,2,[[[T]],[T]]],[11,r_za,E,E,2,[[[r_ca]],[U]]],[11,r_qa,E,E,2,[[[r_ca]],[T]]],[11,r_ra,E,E,2,N],[11,r_sa,E,E,2,[[[U]],[r_pa]]],[11,r_ta,E,E,2,[[[r_ca]],[T]]],[11,r_ua,E,E,2,[[[r_ca]],[r_va]]],[11,r_wa,E,E,2,[[[r_ca]],[r_pa]]],[11,r_xa,E,E,2,[[[r_ca]],[T]]],[11,r_ya,E,E,3,[[[T]],[T]]],[11,r_za,E,E,3,[[[r_ca]],[U]]],[11,r_qa,E,E,3,[[[r_ca]],[T]]],[11,r_ra,E,E,3,N],[11,r_sa,E,E,3,[[[U]],[r_pa]]],[11,r_ta,E,E,3,[[[r_ca]],[T]]],[11,r_ua,E,E,3,[[[r_ca]],[r_va]]],[11,r_wa,E,E,3,[[[r_ca]],[r_pa]]],[11,r_xa,E,E,3,[[[r_ca]],[T]]],[11,r_ya,E,E,5,[[[T]],[T]]],[11,r_Aa,E,E,5,[[[r_ca]],["i"]]],[11,r_za,E,E,5,[[[r_ca]],[U]]],[11,r_sa,E,E,5,[[[U]],[r_pa]]],[11,r_ta,E,E,5,[[[r_ca]],[T]]],[11,r_ua,E,E,5,[[[r_ca]],[r_va]]],[11,r_wa,E,E,5,[[[r_ca]],[r_pa]]],[11,r_xa,E,E,5,[[[r_ca]],[T]]],[11,r_ya,E,E,6,[[[T]],[T]]],[11,r_Aa,E,E,6,[[[r_ca]],["i"]]],[11,r_za,E,E,6,[[[r_ca]],[U]]],[11,r_sa,E,E,6,[[[U]],[r_pa]]],[11,r_ta,E,E,6,[[[r_ca]],[T]]],[11,r_ua,E,E,6,[[[r_ca]],[r_va]]],[11,r_wa,E,E,6,[[[r_ca]],[r_pa]]],[11,r_xa,E,E,6,[[[r_ca]],[T]]],[11,r_ya,E,E,4,[[[T]],[T]]],[11,r_za,E,E,4,[[[r_ca]],[U]]],[11,r_qa,E,E,4,[[[r_ca]],[T]]],[11,r_ra,E,E,4,N],[11,r_Ba,E,E,4,[[[r_ca]],[r_Ca]]],[11,r_sa,E,E,4,[[[U]],[r_pa]]],[11,r_ta,E,E,4,[[[r_ca]],[T]]],[11,r_ua,E,E,4,[[[r_ca]],[r_va]]],[11,r_wa,E,E,4,[[[r_ca]],[r_pa]]],[11,r_xa,E,E,4,[[[r_ca]],[T]]],[11,r_ya,E,E,0,[[[T]],[T]]],[11,r_za,E,E,0,[[[r_ca]],[U]]],[11,r_qa,E,E,0,[[[r_ca]],[T]]],[11,r_ra,E,E,0,N],[11,r_Ba,E,E,0,[[[r_ca]],[r_Ca]]],[11,r_sa,E,E,0,[[[U]],[r_pa]]],[11,r_ta,E,E,0,[[[r_ca]],[T]]],[11,r_ua,E,E,0,[[[r_ca]],[r_va]]],[11,r_wa,E,E,0,[[[r_ca]],[r_pa]]],[11,r_xa,E,E,0,[[[r_ca]],[T]]],[11,r_ya,E,E,1,[[[T]],[T]]],[11,r_za,E,E,1,[[[r_ca]],[U]]],[11,r_qa,E,E,1,[[[r_ca]],[T]]],[11,r_ra,E,E,1,N],[11,r_Ba,E,E,1,[[[r_ca]],[r_Ca]]],[11,r_sa,E,E,1,[[[U]],[r_pa]]],[11,r_ta,E,E,1,[[[r_ca]],[T]]],[11,r_ua,E,E,1,[[[r_ca]],[r_va]]],[11,r_wa,E,E,1,[[[r_ca]],[r_pa]]],[11,r_xa,E,E,1,[[[r_ca]],[T]]],[11,r_ya,E,E,0,[[["utf8error"]],[r_Da]]],[11,"next",E,E,5,[[[r_ca]],[r_ga,[r_aa]]]],[11,"next",E,E,6,[[[r_ca]],[r_ga,[r_aa]]]],[11,"default",E,E,3,[[],[r_Ea]]],[11,"eq",E,E,0,[[[r_ca],[r_Da]],[r_ea]]],[11,"ne",E,E,0,[[[r_ca],[r_Da]],[r_ea]]],[11,"eq",E,E,1,[[[r_ca],[r_ja]],[r_ea]]],[11,"eq",E,E,4,[[[r_ca],[r_aa]],[r_ea]]],[11,r_Fa,E,E,2,[[[r_ca]],[r_ba]]],[11,r_Fa,E,E,0,[[[r_ca]],[r_Da]]],[11,r_Fa,E,E,3,[[[r_ca]],[r_Ea]]],[11,r_Fa,E,E,1,[[[r_ca]],[r_ja]]],[11,r_Fa,E,E,4,[[[r_ca]],[r_aa]]],[11,"hash",E,E,1,N],[11,r_Ha,E,E,0,[[[r_ca],[r_Ga]],[r_pa]]],[11,r_Ha,E,E,1,[[[r_ca],[r_Ga]],[r_pa]]],[11,r_Ha,E,"Formats the cookie `self` as a `Set-Cookie` header value.",4,[[[r_ca],[r_Ga]],[r_pa]]],[11,r_Ha,E,E,2,[[[r_ca],[r_Ga]],[r_pa]]],[11,r_Ha,E,E,0,[[[r_ca],[r_Ga]],[r_pa]]],[11,r_Ha,E,E,3,[[[r_ca],[r_Ga]],[r_pa]]],[11,r_Ha,E,E,1,[[[r_ca],[r_Ga]],[r_pa]]],[11,r_Ha,E,E,4,[[[r_ca],[r_Ga]],[r_pa]]],[11,"from_str",E,E,4,[[[r_na]],[r_pa,[r_aa,r_Da]]]],[11,"description",E,E,0,[[[r_ca]],[r_na]]]],"p":[[4,r_Ia],[4,r_Ja],[3,r_Ka],[3,r_La],[3,r_Ma],[3,r_Na],[3,"Iter"]]};
initSearch(searchIndex);addSearchOptions(searchIndex);