/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { chakra } from "@chakra-ui/react";
import { Wrapper, WrapperProps } from "@/common/components/Wrapper/Wrapper";
import NextScript from "next/script";

export interface SectionContactProps extends Omit<WrapperProps, "children"> {}

const styles = css`
#mc_embed_signup{background:#fff; false;clear:left; font:14px Helvetica,Arial,sans-serif; width: 600px;}
/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
  We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
`;

export const SectionContact = ({
  background,
  maxWidth,
  paddingBottom,
  paddingTop,
  paddingLeft,
  paddingRight,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
}: SectionContactProps) => {
  // This is just a placeholder. We have to think more about how to integrate / embed mailchimp here.
  return null;

  return (
    <Wrapper
      maxWidth={maxWidth}
      paddingBottom={paddingBottom}
      paddingTop={paddingTop}
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}
      background={background}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
      marginTop={marginTop}
    >
      <NextScript
        src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
        strategy="beforeInteractive"
        id="mailchimp"
      />
      <NextScript id="mailchimp2" strategy="beforeInteractive">
        {`
          (function($) {
            window.fnames = new Array();
            window.ftypes = new Array();
            fnames[0]='EMAIL';
            ftypes[0]='email';
            fnames[1]='FNAME';
            ftypes[1]='text';
            fnames[2]='LNAME';
            ftypes[2]='text';
            fnames[6]='POSITION';
            ftypes[6]='text';
          })(jQuery);
          var $mcj = jQuery.noConflict(true);
        `}
      </NextScript>
      <chakra.div css={styles}></chakra.div>
      <div id="mc_embed_shell">
        <chakra.div id="mc_embed_signup">
          <form
            action="https://eepurl.us5.list-manage.com/subscribe/post?u=e1e45fd6e057c2ffc679ea161&amp;id=79264db8fd&amp;f_id=00e6b2edf0"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
          >
            <div id="mc_embed_signup_scroll">
              <h2>Subscribe to our mailing list</h2>
              <div className="indicates-required">
                <span className="asterisk">*</span> indicates required
              </div>
              <div className="mc-field-group">
                <label htmlFor="mce-EMAIL">
                  Email Address <span className="asterisk">*</span>
                </label>
                <input
                  type="email"
                  name="EMAIL"
                  className="required email"
                  id="mce-EMAIL"
                  required
                  value=""
                />
              </div>
              <div className="mc-field-group">
                <label htmlFor="mce-FNAME">First Name </label>
                <input
                  type="text"
                  name="FNAME"
                  className=" text"
                  id="mce-FNAME"
                  value=""
                />
              </div>
              <div className="mc-field-group">
                <label htmlFor="mce-LNAME">Last Name </label>
                <input
                  type="text"
                  name="LNAME"
                  className=" text"
                  id="mce-LNAME"
                  value=""
                />
              </div>
              <div className="mc-field-group">
                <label htmlFor="mce-POSITION">Position / Job Title </label>
                <input
                  type="text"
                  name="POSITION"
                  className=" text"
                  id="mce-POSITION"
                  value=""
                />
              </div>
              <div className="mc-field-group input-group">
                <strong>Programming languages you're learning </strong>
                <ul>
                  <li>
                    <input
                      type="checkbox"
                      name="group[383841][1]"
                      id="mce-group[383841]-383841-0"
                      value=""
                    />
                    <label htmlFor="mce-group[383841]-383841-0">Python</label>
                  </li>
                </ul>
              </div>
              <div id="mce-responses" className="clear">
                <div
                  className="response"
                  id="mce-error-response"
                  style={{ display: "none" }}
                ></div>
                <div
                  className="response"
                  id="mce-success-response"
                  style={{ display: "none" }}
                ></div>
              </div>
              <div
                aria-hidden="true"
                style={{ position: "absolute", left: "-5000px" }}
              >
                <input
                  type="text"
                  name="b_e1e45fd6e057c2ffc679ea161_79264db8fd"
                  tabIndex={-1}
                  value=""
                />
              </div>
              <div className="clear">
                <input
                  type="submit"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="button"
                  value="Subscribe"
                />
              </div>
            </div>
          </form>
        </chakra.div>
      </div>
    </Wrapper>
  );
};
