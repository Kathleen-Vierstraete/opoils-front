/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */

export function findMember(members, searchedSlug) {
  const member = members.find((testedMember) => {
    return testedMember.slug === searchedSlug;
  });
  return member;
}
