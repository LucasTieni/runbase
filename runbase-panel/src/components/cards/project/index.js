import Image from 'next/image'
import { Card, Thumb, Icon, Description, Name, Content, ThumbContainer, Status } from './styles'
import { DotsVerticalIcon } from '@radix-ui/react-icons'

export default function ProjectCard() {
  return (
    <Card>
      <ThumbContainer>
        <Thumb></Thumb>
      </ThumbContainer>
      <Description>
        <div>
          <Name>App Name</Name>
          <Status>Active</Status>
        </div>
        <Icon>
          <DotsVerticalIcon />
        </Icon>
      </Description>
    </Card>
  )
}
