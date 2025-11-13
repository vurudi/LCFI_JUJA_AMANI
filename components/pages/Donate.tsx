'use client';
import PageHeader from '@/components/PageHeader';
import { Quote } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
// import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'; // Temporarily disabled
import SectionTitle from '@/components/SectionTitle';
import { useTranslations } from 'next-intl';

const Donate = () => {
  const translations = useTranslations();
  return (
    <div>
      <PageHeader title={translations('navigation.supportUs')} />
      <div className="my-20 grid lg:grid-cols-3 gap-10 mx-6 md:mx-12 lg:mx-48">
        <div className="border p-6 lg:col-span-1 space-y-4">
          <h4 className="text-center font-bold text-2xl">
            {translations('supportUsPage.campaign')}
          </h4>
          <div className="space-y-4">
            <Image
              src="https://res.cloudinary.com/dxu0xbfen/image/upload/v1732137645/foundation_v9gdnk.jpg"
              alt="About image"
              height={1000}
              width={500}
              className="max-h-56"
            />
            <h3 className="font-bold text-lg">
              {translations('supportUsPage.campaignTitle')}
            </h3>
            <p className="dancing-script-regular">
              <span className="inline-flex rotate-180">
                <Quote className="size-5" />
              </span>{' '}
              {translations('supportUsPage.quote')}{' '}
              <span className="inline-flex">
                <Quote className="size-5" />
              </span>
            </p>
            <hr />
            <p>{translations('supportUsPage.campaignDescription')}</p>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-4">
          <SectionTitle
            title={translations('supportUsPage.title')}
            subTitle={translations('supportUsPage.subTitle')}
            className="!items-start w-fit"
            wrap={true}
          />
          <p>{translations('supportUsPage.description')}</p>
          <p className="font-bold">Our vision is clear:</p>
          <ol className="list-disc pl-5 [&>li]:mb-2">
            <li>{translations('supportUsPage.visions.first')}</li>
            <li>{translations('supportUsPage.visions.second')}</li>
            <li>{translations('supportUsPage.visions.third')}</li>
          </ol>
          <p>{translations('supportUsPage.endDescription')}</p>

          {/* PayPal temporarily disabled */}
          {/* <PayPalScriptProvider
            options={{
              clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!,
              currency: 'USD',
              intent: 'capture',
            }}
          >
            <PayPalButtons
              style={{
                color: 'gold',
                shape: 'rect',
                label: 'donate',
                height: 50,
              }}
            />
          </PayPalScriptProvider> */}

          {/* Coming Soon Message */}
          <div className="border-2 border-blue-500 bg-blue-50 p-6 rounded-2xl text-center shadow-md">
            <h3 className="text-2xl font-semibold mb-2 text-blue-700">
              Donations Coming Soon
            </h3>
            <p className="text-blue-600">
              We’re preparing a secure and convenient way for you to support our mission online. 
              Thank you for your patience, generosity, and continued prayers. 
              <br />
              <span className="font-medium">Blessings!</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
