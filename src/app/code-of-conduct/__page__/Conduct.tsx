import { Box, Heading, Text, UnorderedList, ListItem, Link } from "@chakra-ui/react"

export const Conduct = () => {

  return (
    <Box maxW="800px" mx="auto" p={6} my={20}>
      <Heading as="h1" size="xl" mb={4}>
        Code of Conduct
      </Heading>
      <Text fontSize="lg" mb={4}>
        Following in the example of our partners at <Link color="codeBlue.400" target="_blank" href="https://codeandcoffee.org/code-of-conduct">Code & Coffee</Link>, Mitobyte (and all the events under its umbrella) is dedicated to providing a harassment-free experience for everyone, regardless of level of experience, gender, gender identity and expression, sexual orientation, disability, physical appearance, body size, race, age, or religion. We do not tolerate harassment of group participants in any form. Sexual language and imagery is not appropriate for any event or communication channel. Group participants violating these rules may be sanctioned or expelled from the event at the discretion of the organizers.
      </Text>
      <Heading as="h2" size="md" mt={6} mb={2}>
        Harassment includes, but is not limited to:
      </Heading>
      <UnorderedList mb={4}>
        <ListItem>
          Verbal comments that reinforce social structures of domination related to gender, gender identity and expression, sexual orientation, disability, physical appearance, body size, race, age, religion, or level of experience
        </ListItem>
        <ListItem>Sexual images in public spaces</ListItem>
        <ListItem>Deliberate intimidation, stalking, or following</ListItem>
        <ListItem>Harassing photography or recording</ListItem>
        <ListItem>Sustained disruption of discussion or other events</ListItem>
        <ListItem>Inappropriate physical contact</ListItem>
        <ListItem>Unwelcome sexual attention</ListItem>
        <ListItem>Advocating for, or encouraging, any of the above behavior</ListItem>
      </UnorderedList>

      <Heading as="h2" size="md" mt={6} mb={2}>
        Enforcement
      </Heading>
      <Text fontSize="lg" mb={4}>
        Participants asked to stop any harassing behavior are expected to comply immediately. If a participant engages in harassing behavior, event organizers retain the right to take any actions to keep the event a welcoming environment for all participants. This includes warning the offender or expulsion from the event. We expect participants to follow these rules at all event venues and event-related social activities.
      </Text>

      <Heading as="h2" size="md" mt={6} mb={2}>
        Reporting
      </Heading>
      <Text fontSize="lg" mb={4}>
        If someone makes you or anyone else feel unsafe or unwelcome, please report it as soon as possible. Group organizers can be identified on Meetup. Harassment and other code of conduct violations reduce the value of our event for everyone. We want you to be happy at our event. People like you make our event a better place.
      </Text>
      <Text fontSize="lg" mb={4}>
        You can make a report either personally or anonymously.
      </Text>

      <Heading as="h3" size="sm" mt={4} mb={2}>
        Anonymous Report
      </Heading>
      <Text fontSize="lg" mb={4}>
        You can make an anonymous report. We can't follow up an anonymous report with you directly, but we will fully investigate it and take whatever action is necessary to prevent a recurrence.
      </Text>

      <Heading as="h3" size="sm" mt={4} mb={2}>
        Personal Report
      </Heading>
      <Text fontSize="lg" mb={4}>
        You can make a personal report by contacting a group organizer on your local Meetup or emailing Allan Wick{' '}
        <Link color="codeBlue.400" href="mailto:allan@mitobyte.com" isExternal>
          allan@mitobyte.com
        </Link>{' '}
        or Joseph Murphy at{' '}
        <Link color="codeBlue.400" href="mailto:joe@mitobyte.com" isExternal>
          joe@mitobyte.com
        </Link>.
      </Text>

      <Text fontSize="lg" mb={4}>
        When taking a personal report, our organizers may involve other organizers to ensure your report is managed properly. This can be upsetting, but we'll handle it as respectfully as possible, and you can include someone to support you. You won't be asked to confront anyone and we won't tell anyone who you are.
      </Text>

      <Text fontSize="lg" mb={4}>
        Our team will be happy to help you contact law enforcement, provide escorts, or otherwise assist you to feel safe for the duration of the event. We value your attendance.
      </Text>

      <Heading as="h2" size="md" mt={6} mb={2}>
        More Resources
      </Heading>
      <UnorderedList mb={4}>
        <ListItem>
          National Domestic Violence Hotline: 1-800-799-7233 SMS: Text START to 88788 or{' '}
          <Link color="codeBlue.400" target="_blank" href="https://www.thehotline.org" isExternal>
            Chat online
          </Link>
        </ListItem>
        <ListItem>
          Report unlawful discrimination online to{' '}
          <Link color="codeBlue.400" target="_blank" href="https://civilrights.justice.gov/report/" isExternal>
            US Department of Justice Civil Rights Division
          </Link>
        </ListItem>
      </UnorderedList>

      <Heading as="h2" size="md" mt={6} mb={2}>
        Attribution
      </Heading>
      <Text fontSize="lg" mb={4}>
        This Code of Conduct is adapted from the <Link target="_blank" color="codeBlue.400" href="https://geekfeminism.fandom.com/wiki/Conference_anti-harassment/Policy">Geek Feminism conference anti-harassment policy</Link>.
      </Text>
    </Box>
  )
}
