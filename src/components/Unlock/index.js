// Write your code here
import {useState} from 'react'

import {
  MainContainer,
  ImageEl,
  Description,
  CustomButton,
} from './styledComponents'

const Unlock = () => {
  const [isLocked, setIsLocked] = useState(false)
  const src = isLocked
    ? 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
  const alt = isLocked ? 'unlock' : 'lock'
  const lockedText = isLocked ? 'Unlocked' : 'Locked'
  const btnText = isLocked ? 'Lock' : 'Unlock'

  const onClickLockBtn = () => setIsLocked(prevIsLocked => !prevIsLocked)

  return (
    <MainContainer>
      <ImageEl src={src} alt={alt} />
      <Description>Your Device is {lockedText} </Description>
      <CustomButton type="button" onClick={onClickLockBtn}>
        {btnText}
      </CustomButton>
    </MainContainer>
  )
}
export default Unlock
