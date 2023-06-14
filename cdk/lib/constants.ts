export const constants = {
  CLUSTER_NAME: 'minecraft',
  SERVICE_NAME: 'minecraft-server',
  MC_SERVER_CONTAINER_NAME: 'minecraft-server',
  WATCHDOG_SERVER_CONTAINER_NAME: 'minecraft-ecsfargate-watchdog',
  DOMAIN_STACK_REGION: 'us-west-2',
  ECS_VOLUME_NAME: 'data',
  HOSTED_ZONE_SSM_PARAMETER: 'MinecraftHostedZoneID',
  LAUNCHER_LAMBDA_ARN_SSM_PARAMETER: 'LauncherLambdaRoleArn',
  JAVA_EDITION_DOCKER_IMAGE: 'itzg/minecraft-server', // Update to custom Docker image.
  BEDROCK_EDITION_DOCKER_IMAGE: 'itzg/minecraft-bedrock-server',
}
