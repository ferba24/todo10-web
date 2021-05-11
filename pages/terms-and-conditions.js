import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import FeatureHighlight from '../components/FeatureHighlight/FeatureHighlight';
// import List from '../components/List'
import ContactForm from '../components/ContactForm';
import WithSend from '../components/ContactForm/WithSend'
import Head from "next/head";
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import DefaultLink from "../components/DefaultLink";


export default function TermsAndConditions() {

    return (
        <Layout>
            <Head>
                <title>Todo 10 - Terms and Conditions</title>
            </Head>
            <div className="my-40"/>
            <div className="section container">
                <PageHeader
                    title="Terms and Conditions"
                    desc=""
                />
            </div>

            <div className="max-w-3xl mx-auto">
                <h3>Terms and Conditions</h3>
                <div className="my-5">
                    The use of services from Todo10.com constitutes agreement to these terms. You may view our Privacy Policy<br /><br />

                    <b>General Terms of Service</b>
                    <p>We will setup your account after we have received payment and we and/or our payment partner(s) have screened the order(s) in case of fraud. It is your responsibility to provide us with an email address which is not @ the domain(s) you are signing up under. If there is ever an abuse issue or we need to contact you, the primary email address on file will be used for this purpose. It is your responsibility to ensure the email address on file is current or up to date at all times. In dedicated server purchases or high risk transactions, it will be necessary to provide government issued identification and possibly a scan of the credit card used for the purchase. If you fail to meet these requirements, the order may be considered fraudulent in nature and be denied.</p><br />

                    <b>Dedicated IP Address Allocation</b>
                    <p>Any dedicated IP order in addition to ones provided with a hosting package may be subject to IP Justification. Justification practices are subject to change to remain in conformity with policies of American Registry for Internet Numbers (ARIN). We reserve the right to deny any dedicated IP request based on insufficient justification or current IP utilization.</p><br />

                    <b>Content</b>
                    <p>All services provided by Todo10 may only be used for lawful purposes. Use of our services to infringe upon any copyright or trademark is prohibited. This includes but is not limited to unauthorized copying of music, books, photographs, or any other copyrighted work. The offer of sale of any counterfeit merchandise of a trademark holder will result in the immediate termination of your account. Any account found to be in violation of anothers copyright will be expeditiously removed, or access to the material disabled. Any account found to be in repeated violation of copyright laws will be suspended and/or terminated from our hosting. If you believe that your copyright or trademark is being infringed upon, please email us.</p><br />
                    <p>Examples of unacceptable material on all Optimized Hosting and Dedicate servers include:</p>
                    <ul>
                        <li style="list-style-type:circle;">IRCD (irc servers)</li>
                        <li style="list-style-type:circle;">IRC Scripts/Bots</li>
                        <li style="list-style-type:circle;">Pirated Software/Warez</li>
                        <li style="list-style-type:circle;">IP Scanners</li>
                        <li style="list-style-type:circle;">Bruteforce Programs/Scripts/Applications</li>
                        <li style="list-style-type:circle;">Mail Bombers/spam Scripts</li>
                        <li style="list-style-type:circle;">Escrow</li>
                        <li style="list-style-type:circle;">High-Yield Interest Programs (HYIP) or Related Sites</li>
                        <li style="list-style-type:circle;">Investment Sites (FOREX, E-Gold Exchange, Second Life/Linden Exchange, Ponzi, MLM/Pyramid Scheme)</li>
                        <li style="list-style-type:circle;">Sale of any controlled substance without prior proof of appropriate permit(s)</li>
                        <li style="list-style-type:circle;">Prime Banks Programs</li>
                        <li style="list-style-type:circle;">Lottery/Gambling Sites</li>
                        <li style="list-style-type:circle;">Hacker focused sites/archives/programs</li>
                        <li style="list-style-type:circle;">Sites promoting illegal activities</li>
                        <li style="list-style-type:circle;">Forums and/or websites that distribute or link to warez/pirated/illegal content</li>
                        <li style="list-style-type:circle;">Bank Debentures/Bank Debenture Trading Programs</li>
                        <li style="list-style-type:circle;">Fraudulent Sites (Including, but not limited to sites listed at aa419.org &amp; escrow-fraud.com)</li>
                        <li style="list-style-type:circle;">Mailer Pro</li>
                        <li style="list-style-type:circle;">Broadcast or Streaming of Live Sporting Events (UFC, NASCAR, FIFA, NFL, MLB, NBA, WWE, WWF, etc) </li>
                    </ul>

                    <p>It is your responsibility to ensure that scripts/programs installed under your account are secure and permissions of directories are set properly, regardless of installation method. When at all possible, set permissions on most directories to 755 or as restrictive as possible. Users are ultimately responsible for all actions taken under their account. This includes the compromise of credentials such as user name and password. It is required that you use a secure password. If a weak password is used, your account may be suspended until you agree to use a more secure password. Audits may be done to prevent weak passwords from being used. If an audit is performed, and your password is found to be weak, we will notify you and allow time for you to change/update your password.</p><br />

                    <b>Zero Tolerance Spam Policy</b>
                    <p>We take a zero tolerance stance against sending of unsolicited e-mail, bulk emailing, and spam. "Safe lists", purchased lists, and selling of lists will be treated as spam. Any user who sends out spam will have their account terminated with or without notice.</p><br />

                    <p>Sites advertised via SPAM (Spamvertised) may not be hosted on our servers. This provision includes, but is not limited to SPAM sent via fax, phone, postal mail, email, instant messaging, or usenet/newsgroups. No organization or entity listed in the ROKSO may be hosted on our servers. Any account which results in our IP space being blacklisted will be immediately suspended and/or terminated.</p><br />

                    <p>Todo10 reserves the right to require changes or disable as necessary any web site, account, database, or other component that does not comply with its established policies, or to make any such modifications in an emergency at its sole discretion.</p><br />

                    <b>Payment Information</b>
                    <p>You agree to supply appropriate payment for the services received from Todo10, in advance of the time period during which such services are provided. Subject to all applicable laws, rules, and regulations, all payments will apply to the oldest invoice(s) in your billing account. You agree that until and unless you notify Todo10 of your desire to cancel any or all services received, those services will be billed on a recurring basis.</p><br />

                    <p>Cancellations must be done in writing via email to support@todo10.com. Once we receive your cancellation and have confirmed all necessary information with you via e-mail, we will inform you in writing (typically email) that your account has been canceled. This process reduces the likelihood of mistakes, fraudulent/malicious requests, and ensures you are aware that the files, emails, and account may be removed immediately after a cancellation request is processed.</p><br />

                <p>As a client of Todo10, it is your responsibility to ensure that your payment information is up to date, and that all invoices are paid on time. You agree that until and unless you notify Todo10 of your desire to cancel any or all services received (by the proper means listed in the appropriate section of the Terms of Service), those services will be billed on a recurring basis, unless otherwise stated in writing by Todo10. Todo10 reserves the right to bill your credit card or billing information on file with us. Todo10 provides a 20 day grace period from the time the invoice is generated and when it must be paid. Any invoice that is outstanding for 20 days and not paid will result in a $20 late fee and/or an account suspension until account balance has been paid in full. The $20 late fee is applied in addition to whatever else is owed to Todo10 for services rendered. Access to the account will not be restored until payment has been received.</p>

                    <b>Backups and Data Loss</b>
                    <p>Our backup service runs once a day and overwrites any of our previous backups made, and only one week of backups are kept. Todo10 is not responsible for files and/or data residing on your account. You agree to take full responsibility for files and data transferred and to maintain all appropriate backup of files and data stored on Todo10 servers.</p><br />

                    <b>Dedicated Servers</b>
                    <p>Todo10 reserves the right to reset the password on a dedicated server if the password on file is not current so that we may do security audits as required by our datacenter. It is the responsibility of the client to ensure that there is a valid email address and current root password on file for their dedicated server on file to prevent downtime from forced password resets. Todo10 reserves the right to audit servers as needed and to perform administrative actions at the request of our datacenter. Dedicated servers are backed up by us and it is our responsibility to maintain backups or have a solution for this. You may purchase an additional hard drive and maintain backups to it as the simplest solution. Please contact if you wish to obtain a secondary hard drive.</p><br />

                    <b>Price Change</b>
                    <p>The amount you pay for hosting will never increase from the date of purchase. We reserve the right to change prices listed on Todo10.com, and the right to increase the amount of resources given to plans at any time.</p><br />

                    <b>Coupons</b>
                    <p>Discounts and coupon codes are reserved for long term customers or first-time customers only. Coupon abuse will not be tolerated and may result in the suspension or termination of the account. Coupons or discounts are only valid towards the initial purchase, and do not affect the renewal or recurring price.</p><br />

                    <b>Changes to the TOS</b>
                    <p>Todo10 reserves the right to revise its policies at any time without notice.</p><br />
                </div>
            </div>
            <div className="my-40"/>
        </Layout>
    )
}