import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import FeatureHighlight from '../components/FeatureHighlight/FeatureHighlight';
// import List from '../components/List'
import ContactForm from '../components/ContactForm';
import WithSend from '../components/ContactForm/WithSend'
import Head from "next/head";
import { useRouter } from 'next/router';
import { useEffect } from 'react';


export default function PrivacyPolicy() {

    return (
        <Layout>
            <Head>
                <title>Todo 10 - Acceptable Use Policy</title>
            </Head>
            <div className="my-40"/>

            <div className="max-w-3xl mx-auto container-small">
                <h3>Acceptable Use Policy</h3>
                <div className="my-5">
                    <br />
                    <p>This Acceptable Use Policy (“AUP”) describes activities that are not allowed in
                        connection with your use of Todo10 Services. Capitalized terms used in this AUP and not otherwise defined herein shall have the
                        meaning given in the Agreement. Inquiries regarding this policy should be directed to support@todo10.com.</p><br />
                    <b>Illegal Activity</b>
                    <p>Customer may only use Todo10 servers for lawful purpose. Transmission of any material in
                        violation of any Country, Federal, State or Local regulation is prohibited. To this
                        effect, child pornography is strictly prohibited as well as housing any copyrighted
                        information (to which the customer does not hold the copyright or an appropriate
                        license). Also, using Todo10 servers or network to conspire to commit or support the
                        commission of illegal activities is forbidden as well.</p><br />
                    <b>Hacking</b>
                    <p>Websites dedicated to the discussion of hacking activities or the distribution of hacking
                        tools are prohibited. Also, the usage of Todo10’s computer systems or network to access
                        any system, service, or network without the owner’s consent is expressly forbidden.</p><br />
                    <b>Service Interruptions</b>
                    <p>Any activity which causes service interruptions to either Todo10’s network/servers or any
                        outside network. This includes, but is not limited to, the execution of Denial of
                        Service attacks or other maliciously configured software.</p><br />
                    <b>Anonymous Proxies</b>
                    <p>Anonymous proxies are easily abused and often cause a negative impact on both the servers
                        and the network they are connected to. As such, they’re prohibited on Todo10’s network
                        and servers.</p><br />
                    <b>Spamming</b>
                    <p>Customer agrees to not have any content on their site that advocates, sells or in any way
                        makes available tools or methods to send unsolicited e-mail or usenet postings (spam),
                        or to use Todo10’s Servers for relaying unsolicited e-mail or usenet postings, or to use
                        unsolicited e-mail or usenet postings to advertise for their site hosted at Todo10. Any
                        complaint we receive about a violation of this or the preceding two points will be taken
                        very seriously and will result in immediate account cancellation without a refund.</p><br />
                    <b>Personal Information Harvesting</b>
                    <p>Collecting or using email addresses, screen names or other personal identifiers without
                        the consent of the person identified (including, without limitation, phishing, Internet
                        scamming, password robbery, spidering, and harvesting).</p><br />
                    <b>Blacklisting</b>
                    <p>You agree that if the Todo10 IP numbers assigned to your account are listed on an abuse
                        database or blacklist like Spamhaus, you will be in violation of this AUP, and Todo10
                        may take reasonable action to protect its IP numbers, including suspension and/or
                        termination of your service, regardless of whether the IP numbers were listed as a
                        result of your actions.</p><br />
                    <b>Spoofing/Impersonation</b>
                    <p>Usage of the Todo10 network to impersonate another person or entity, be it through Email,
                        Internet Forums, or any other means, is strictly prohibited. This includes spoofing
                        email or network packet headers whether or not it is done for malicious purposes.</p><br />
                    <b>Spamdexing</b>
                    <p>Customer agrees to not engage in activities pertaining to Black Hat SEO, Spamdexing, and
                        so-called “Scraper sites.” These can all have a severely detrimental effect on server
                        performance and are not permitted.</p><br />
                    <p>Any conduct that is likely to result in retaliation against Todo10’s network or website,
                        or Todo10’s employees, officers or other agents, including engaging in behavior that
                        results in any server being the target of a denial of service attack (DoS).</p><br />
                    <b>Personal Backups</b>
                    <p>With the exception of Todo10 Optimized Dedicated Server products, the customer agrees to
                        make use of Todo10 servers primarily for the purpose of hosting a website, and
                        associated email functions. Data uploaded must be primarily for this purpose. Todo10
                        servers are not intended as a data backup or archiving service. Todo10 reserves the
                        right to negotiate additional charges with the Customer and/or the discontinuation of
                        the backups/archives at their discretion.</p><br />
                    <b>PROHIBITED CONTENT AND ACTIVITIES</b>
                    <p>Adult Thumbnail Galleries/Banner Exchanges
                        You agree not to run a banner exchange, free adult tgp (thumbnail gallery post), or free
                        adult image galleries on your website.</p><br />
                    <b>Abusive Scripts/Processes</b>
                    <p>Any script/process/etc that adversely affects the ability of any other customer to
                        satisfactorily use their provided services is forbidden. This includes, but is not
                        limited to, CPU-intensive CGI/PHP scripts and websites for which the scale of traffic
                        has exceeded the acceptable limits of a shared hosting environment.</p><br />
                    <b>IRC Bots/Bouncers</b>
                    <p>All IRC bots and “bouncers” (bnc, etc) are forbidden.</p><br />
                    <b>Network Daemons</b>
                    <p>Any process that opens a network socket to accept connections from external networks is
                        forbidden. Processes are allowed to bind to the local host only, but are held to the
                        limitations placed on all other processes. They must not use up more than their fair
                        share of resources and they must not interfere with any other customers’ activities.</p>

                </div>
            </div>
            <div className="my-40"/>
        </Layout>
    )
}