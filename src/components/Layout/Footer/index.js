import React, { useContext } from 'react'
import USLogo from "../../../assets/logos/US.png"
import BritishCouncilLogo from "../../../assets/logos/BritishCouncil2.png"
import HetqLogo from "../../../assets/logos/Hetq.png"
import { FormattedMessage } from "react-intl"
import SocialIcon from "../../Shared/SocialIcon"
import LinkCopied from "../../../assets/icons/LinkCopied.svg"
import { Context as LanguageContext } from "../../../services/Wrapper"

const Footer = () => {

  const { alertPopUp } = useContext( LanguageContext )

  const surveyLink = 'https://docs.google.com/spreadsheets/d/18grKjOU3ZvmqDqK52jdc7ysnfhBZmdx9gmvUHC-nf-M/edit'
  const climateLink = 'https://docs.google.com/spreadsheets/d/18GFo8qidUhRS45-uZrkH5IrlwHCW0kioRwIkXw83_A0/edit?usp=sharing&urp=gmail_link'

  return (
    <footer className="w-full bg-gray-100">
      <div className="pl-2 flex gap-2 pt-6 lg:hidden">
        <SocialIcon name="facebook" />
        <SocialIcon name="twitter" />
        <SocialIcon name="copy" />
        { alertPopUp &&
          <div className="ml-6 mt-3">
            <img
              alt="Link Copied"
              src={ LinkCopied }
            />
          </div>
        }
      </div>
      <div className="max-w-3xl mx-auto py-6 px-6 lg:px-0 lg:py-16 text-gray-darkest leading-6 lg:leading-7 text-sm">
        <h2 className="text-green text-lg lg:text-xl">
          <FormattedMessage id="Methodology"/>
        </h2>
        <p className="mt-4">
          <FormattedMessage id="TextSurveyByQGIS"/>
        </p>
        <p className="mt-3">
          <FormattedMessage id="TextSurveyClimateChange"/>
        </p>
        <div className="my-12 lg:my-14 flex flex-col justify-between lg:flex-row">
          <ul>
            <li className="text-green text-lg lg:text-xl">
              <FormattedMessage id="Author"/>
            </li>
            <li className="mt-2 lg:mt-4">
              <FormattedMessage id="Christian Ginosyan"/>
            </li>
          </ul>
          <ul className="mt-8 lg:mt-0">
            <li className="text-green text-lg lg:text-xl">
              <FormattedMessage id="Mentors"/>
            </li>
            <li className="mt-2 lg:mt-4">
              <FormattedMessage id="Ani Hovhannisyan"/>
            </li>
            <li>
              <FormattedMessage id="Katia Mamyan"/>
            </li>
          </ul>
          <ul className="mt-8 lg:mt-0">
            <li className="text-green text-lg lg:text-xl">
              <FormattedMessage id="Data"/>
            </li>
            <li className="mt-2 lg:mt-4 ml-8 lg:ml-5 underline text-blue list-disc">
              <a
                href={ surveyLink }
                rel="noreferrer"
                target="_blank"
              >
                <FormattedMessage id="Survey"/>
              </a>
            </li>
            <li className="ml-8 lg:ml-5 underline text-blue list-disc">
              <a
                href={ climateLink }
                rel="noreferrer"
                target="_blank"
              >
                <FormattedMessage id="ClimateChange"/>
              </a>
            </li>
          </ul>
        </div>
        <p className="max-w-xl">
          <FormattedMessage id="TextCreatedFrom"/>
        </p>
        <div className="flex gap-6 lg:gap-14 my-10">
          <div className="self-center">
            <img
              alt="British Council in Armenia"
              src={ BritishCouncilLogo }
              width="198.35"
            />
          </div>
          <div className="self-center">
            <img
              alt= "US Embassy"
              src={ USLogo }
              width="106.88"
            />
          </div>
          <div className="self-center">
            <img
              alt="Hetq Media"
              src={ HetqLogo }
              width="70"
            />
          </div>
        </div>
      </div>
      <div className="mx-auto py-2 bg-white w-full">
        <div className="flex justify-center text-gray-darkest text-sm lg:text-base">
          <p>Developed by Mamble Labs</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
