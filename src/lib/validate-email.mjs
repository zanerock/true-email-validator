import { ipFormatRE } from 'regex-repo'

import * as emailBNF from './bnf/email.js'

const validateEmail = function (input, {
  allowComments = this?.allowComments || false,
  allowDomainLiteral = this?.allowDomainLiteral || false,
  allowIPDomain = this?.allowIPDomain || false,
  allowIPV6 = this?.allowIPV6 || false,
  allowLocalhost = this?.allowLocalhost || false,
  arbitraryTLDs = this?.arbitraryTLDs || false,
  blacklistedChars = this?.blacklistedChars || '',
  domainBlackList = this?.domainBlackList || [],
  domainSpecificValidation = this?.domainSpecificValidation || false,
  noLengthCheck = this?.noLengthCheck || false,
  noTLDOnly = this?.noTLDOnly || false,
  noUTF8LocalPart = this?.noUTF8LocalPart || false,
  requireDisplayName = this?.requireDisplayName || false,
  strictTLDCheck = this?.strictTLDCheck || false
} = {}) {
  if (input === undefined || input === null) {
    return { valid: false, issues: ['is null or undefined'] }
  }
  else if (typeof input !== 'string') {
    return { valid: false, issues: ['is not type string'] }
  }

  const issues = []

  const addrSpec = emailBNF.Parse_Addr_spec(input).root
  if (addrSpec === undefined) {
    return { valid: false, issues: ['not recognized as a valid email address'] }
  }
  // else

  const localPartValue = addrSpec.value[0].value[0]
  const commentLocalPartPrefix = localPartValue.value[0].value[0].value[0].value[0]?.value[0]?.value[1].value[1].value
  const username = localPartValue.value[1].value
  const commentLocalPartSuffix = localPartValue.value[2].value[0].value[0].value[0]?.value[0]?.value[1].value[1].value

  const domainValue = addrSpec.value[2].value[0]
  let commentDomainSuffix, domain, domainLiteral, commentDomainPrefix
  if (domainValue.type === 'dot_atom') {
    commentDomainPrefix = domainValue.value[0].value[0].value[0].value[0]?.value[0]?.value[1].value[1].value
    domain = domainValue.value[1].value
    commentDomainSuffix = domainValue.value[2].value[0].value[0].value[0]?.value[0]?.value[1].value[1].value
  }
  else {
    commentDomainPrefix = domainValue.value[0].value[0].value[0].value[0]?.value[0]?.value[1].value[1].value
    domainLiteral = domainValue.value[2].value
    commentDomainSuffix = domainValue.value[4].value[0].value[0].value[0]?.value[0]?.value[1].value[1].value
  }

  if (allowComments !== true 
    && (commentLocalPartPrefix !== undefined 
      || commentLocalPartSuffix !== undefined 
      || commentDomainPrefix !== undefined 
      || commentDomainSuffix !== undefined)) {
    issues.push('contains disallowed comment(s)')
  }
  if (allowDomainLiteral !== true && domainLiteral !== undefined) {
    issues.push('contains disallowed domain literal')
  }
  if (allowIPDomain !== true && (ipFormatRE.test(domain) == true)) {
    issues.push('domain appears to be a disallowed IP address')
  }

  return {
    valid : issues.length === 0,
    commentLocalPartPrefix,
    username,
    commentLocalPartSuffix,
    commentDomainPrefix,
    domain,
    domainLiteral,
    commentDomainSuffix,
    issues
  }
}

export { validateEmail }