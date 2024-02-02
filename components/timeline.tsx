import { Timeline, Text } from '@mantine/core';

function Chronology() {
  return (
    <Timeline active={3} bulletSize={6} lineWidth={2} color="gray">
      <Timeline.Item title="UPM">
        <Text color="dark" size="sm">Studied Computer Science at Universiti Putra Malaysia, UPM for 4 years</Text>
        <Text color="dark" size="sm">Mainly focused on analytics, databases, and AI/ML</Text>
        <Text color="dark" size="xs" mt={4}>2019 - 2023</Text>
      </Timeline.Item>

      <Timeline.Item  title="SANDS Consulting">
        <Text color="dark" size="sm">Internship @ SANDS Consulting for 6 months. Developed the 
        <a href="https://apps.apple.com/my/app/mywakalah/id1544712828" style={{color:'black', textDecoration: 'underline'}}> MyWakalah </a> mobile app</Text>
        <Text color="dark" size="xs" mt={4}>March 2023</Text>
      </Timeline.Item>

      <Timeline.Item  title="IKHLAS Travel @ Capital A">
        <Text color="dark" size="sm">Joined Ikhlas @ AirAsia as a junior software engineer</Text>
        <Text color="dark" size="xs" mt={4}>October 2023</Text>
      </Timeline.Item>
    </Timeline>
  );
}

export default Chronology;